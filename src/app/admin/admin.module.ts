import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {MainPageComponent} from "../main-page/main-page.component";
import {ProductPageComponent} from "../product-page/product-page.component";
import {CartPageComponent} from "../cart-page/cart-page.component";
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OdersPageComponent } from './oders-page/oders-page.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthGuard} from "../shared/auth.guard";
import { QuillModule } from 'ngx-quill';
import {SearchPipe} from "../shared/search.pipe";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    AddPageComponent,
    DashboardComponent,
    EditPageComponent,
    OdersPageComponent,
    SearchPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children:[
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'add', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OdersPageComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},

        ]
      }
    ])
  ],
  exports: [RouterModule],
})
export class AdminModule {

}
