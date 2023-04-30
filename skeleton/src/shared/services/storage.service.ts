import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private Storage: any;
  constructor(private router: Router) {
    this.Storage = environment.tokenLifeTime === 'local' ? localStorage : sessionStorage;
  }

  public GetByKey(key: string): any {
    const item = this.Storage.getItem(key);
    if (item && item !== 'undefined')
      return JSON.parse(item);
    return;
  }

  public GetAccessToken(): any {
    const item = this.GetByKey('authorizationData');
    if (item && item !== 'undefined') {
      return item.access_token;
    }
    else {
      this.router.navigate(['/auth/login'], {
        queryParams: {},
      });
    }
  }
  public StoreItem(key: string, value: any) {
    this.Storage.setItem(key, JSON.stringify(value));
  }
  public HasKey(key: string): boolean {
    return this.Storage.hasOwnProperty(key);
  }

  public DeleteByKey(key: string) {
    if (this.HasKey(key)) {
      this.Storage.removeItem(key);
    }
  }
}
