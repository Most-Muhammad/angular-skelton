import { environment } from 'src/environments/environment';

import { Injectable, Self } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SecurityService } from './security.service';
import { ApplicationException } from '@core/exceptions/exception';
import { Guid } from '@core/types/guid';




@Injectable({
    providedIn: 'root'
})
export class DataService {
    private URI: string;

    constructor(private http: HttpClient, private securityService: SecurityService) {
        this.URI = environment.apiUrl;
        if (!this.URI.endsWith('/')) { this.URI += '/'; }//
    }

    private get exception() {
        return new ApplicationException();
    }

    convertToFormData(
        jsonObject: Object,
        parentKey: string | null,
        carryFormData: FormData | null
    ): FormData {
        const formData = carryFormData || new FormData();
        let index = 0;
        type ObjectKey = keyof typeof jsonObject;

        for (var keyVal in jsonObject) {
            const key = keyVal as ObjectKey;
            if (jsonObject.hasOwnProperty(keyVal)) {
                if (jsonObject[key] !== null && jsonObject[key] !== undefined) {
                    var propName = parentKey || key;
                    if (parentKey && this.isObject(jsonObject)) {
                        propName =
                            parentKey + (!isNaN(Number(key)) ? '[' + key + ']' : '.' + key);
                    }
                    if (parentKey && this.isArray(jsonObject)) {
                        propName = parentKey + '[' + index + ']';
                    }
                    if (jsonObject[key] instanceof File) {
                        formData.append(propName, jsonObject[key] as unknown as File);
                    } else if (jsonObject[key] instanceof FileList) {
                        for (var j = 0; j < jsonObject[key].length; j++) {
                            const fileList = jsonObject[key] as unknown as FileList;
                            //TODO
                            //   formData.append(propName + '[' + j + ']', (jsonObject[key] ) ).item(j));
                            //  formData.append(propName + '[' + j + ']', fileList. );
                        }
                    } else if (jsonObject[key] instanceof Date) {
                        formData.append(
                            propName,
                            new Date(jsonObject[key].toString()).toUTCString()
                        );
                    } else if (
                        this.isArray(jsonObject[key]) ||
                        this.isObject(jsonObject[key])
                    ) {
                        this.convertToFormData(jsonObject[key], propName, formData);
                    } else if (typeof jsonObject[key] === 'boolean') {
                        formData.append(propName, +jsonObject[key] ? 'true' : 'false');
                    } else {
                        formData.append(propName, jsonObject[key].toString());
                    }
                }
            }
            index++;
        }
        return formData;
    }
    isArray(val: any) {
        const toString = ({}).toString;
        return toString.call(val) === '[object Array]';
    }

    isObject(val: any) {
        return !this.isArray(val) && typeof val === 'object' && !!val;
    }

    get<T>(api: string, params?: any): Observable<T> {
        var header = this.setHeader();

        return this.http.get<T>(`${this.URI}${api}`, { headers: header, params })
            .pipe(catchError((error) => {
                this.errorSanckBar(error)
                return this.handleError(error)
            }));
    }
    getText(api: string, params?: any): Observable<string> {
        var header = this.setHeader();
        header?.append("responseType", "text")

        return this.http
            .get(`${this.URI}${api}`, { responseType: 'text', headers: header, params })
            .pipe(catchError(this.handleError));
    }
    getFilePDF(api: string, params?: any) {
        var header = this.setHeader();
        header?.append("responseType", "text")

        return this.http
            .get(`${this.URI}${api}`, { responseType: 'blob', observe: 'response', headers: header, params })
            .pipe(
                map((res: any) => {
                    return new Blob([res.body], { type: 'application/pdf' });
                }),
                catchError(this.handleError));
    }
    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }

    post(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(`${this.URI}${url}`, data, false, params);
    }
    put(url: string, data: any, params?: any): Observable<Response> {
        return this.doPut(`${this.URI}${url}`, data, false, params);
    }
    postFormData(url: string, data: any, params?: any): Observable<Response> {

        return this.doPost(`${this.URI}${url}`, data, false, params);
    }
    postFormDataWithProgress(url: string, data: any, authorized: boolean, params?: any): Observable<HttpEvent<Response>> {

        return this.doPostWithProgress(`${this.URI}${url}`, data, false, params, authorized);
    }
    putWithId(api: string, id: any, data: any, params?: any): Observable<Response> {
        return this.doPut(`${this.URI}${api}/${id}`, data, false, params);
    }

    delete(url: string, id: any): Observable<Response> {
        //const options = {};
        // this.setHeader(options);
        var header = this.setHeader();
        return this.http.delete<Response>(`${this.URI}${url}/${id}`, { headers: header })
            .pipe(
                tap((res: Response) => {
                    return res;
                }),
                catchError((error) => {
                    this.errorSanckBar(error)
                    return this.handleError(error)
                })
            );
    }

    private setHeader(needId?: boolean) {
        const token = this.securityService.GetToken();
        if (needId && this.securityService) {
            //options['headers'] =
            return new HttpHeaders()
                .append('authorization', 'Bearer ' + token)
                .append('x-requestid', Guid.newGuid());
        }
        else if (this.securityService) {
            return new HttpHeaders()
                .append('authorization', 'Bearer ' + token);
        }
        return new HttpHeaders();
    }
    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        // const options = {};
        //this.setHeader(options, needId);
        var header = this.setHeader(needId);
        return this.http.post<Response>(url, data, { headers: header })
            .pipe(
                tap((res: Response) => {
                    return res;
                }),
                catchError((error) => {
                    this.errorSanckBar(error)
                    return this.handleError(error)
                })
            );
    }

    private doPostWithProgress(url: string, data: any, needId: boolean, params?: any, authorized?: boolean): Observable<HttpEvent<Response>> {
        // const options = {};
        //this.setHeader(options, needId);

        var header = this.setHeader(needId);
        return this.http.post<Response>(url, data, { headers: header, reportProgress: true, observe: "events" })
            .pipe(
                tap((res: HttpEvent<Response>) => {
                    return res;
                }),
                catchError((error) => {
                    this.errorSanckBar(error)
                    return this.handleError(error)
                })
            );
    }

    private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        // const options = {};
        // this.setHeader(options, needId);
        var header = this.setHeader();
        return this.http.put<Response>(url, data, { headers: header })
            .pipe(

                tap((res: Response) => {
                    return res;
                }),
                catchError((error) => {
                    this.errorSanckBar(error)
                    return this.handleError(error)
                })
            );
    }

    private handleError(error: any) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client side network error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend - ' +
                `status: ${error.status}, ` +
                `statusText: ${error.statusText}, ` +
                `message: ${error?.error?.message || ''}`);
        }
        this.errorSanckBar(error);
        // return an observable with a user-facing error message
        return throwError(error || 'server error');
    }

    errorSanckBar(errMessage: any) {
        alert(`Failed to execute operation, reason  [ ${this.exception.getError(errMessage)} ] please try again`)
        // in case you need to use MatSnack uncomment
        /*this.snackBar.open(`Failed to execute operation, reason  [ ${this.exception.getError(errMessage)} ] please try again,`, 'Dismiss', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'backgroud:red',
        });*/
    }
}
