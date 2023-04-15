import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppInjector } from '@core/classes/app.injector';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  AppInjector
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
