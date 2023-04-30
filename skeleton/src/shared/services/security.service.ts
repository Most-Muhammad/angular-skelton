import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private storageService: StorageService) {

    }

    public GetToken(): any {
        return this.storageService.GetAccessToken();
    }
}
