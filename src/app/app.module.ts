import { AppRoutes } from './app.routes';
import { StocksService } from './services/stocks.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { RoutesComponent } from './components/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes

  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
