import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KeywordSalesDashboardModule } from './keyword-sales-dashboard/KeywordSalesDashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KeywordSalesDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }