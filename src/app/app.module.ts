import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api-service';
import { MockApiService } from './services/mock-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: ApiService, useClass: MockApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
