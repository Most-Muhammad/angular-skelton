import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from '@core/classes/lower.case.url.serializer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
