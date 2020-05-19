import {Routes} from '@angular/router'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component'
import { NgModule } from '@angular/core'
import { WindowsComponent } from './windows/windows.component'
import { TableComponent } from './table/table.component'
import { AddClubComponent } from './add-club/add-club.component'
import { UpdateComponent } from './update/update.component'
import { DetailsComponent } from './details/details.component'

const appRoutes: Routes=[
    { path: '', component:  AppComponent },
    {path: 'windows', component: WindowsComponent},
    {path: 'table', component: TableComponent},
    {path: 'addclub', component: AddClubComponent},
    {path: 'update/:id', component: UpdateComponent},
    {path: 'details/:id', component: DetailsComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
  })
  export class AppRoutesModule { }
