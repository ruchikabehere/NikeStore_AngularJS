import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ShoeDetailComponent } from './shoe-detail.component';
import { ShoeComponent } from './shoe.component';
import { ShoeService } from './shoe.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoeSearchComponent } from './shoe-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        ShoeDetailComponent,
        ShoeComponent,
        DashboardComponent,
        ShoeSearchComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ShoeService
    ],
})
export class AppModule { }
