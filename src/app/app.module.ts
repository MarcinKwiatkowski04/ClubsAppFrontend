import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RoutesRecognized} from '@angular/router'
import {AppRoutesModule} from './app-routes.module'
import { AppComponent } from './app.component';
import { WindowsComponent } from './windows/windows.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { AddClubComponent } from './add-club/add-club.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    WindowsComponent,
    DetailsComponent,
    TableComponent,
    UpdateComponent,
    AddClubComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
