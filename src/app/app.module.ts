import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { ManagerPortalComponent } from './components/manager-portal/manager-portal.component';
import { EmployeeInterfaceComponent } from './components/employee-interface/employee-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerPortalComponent,
    EmployeeInterfaceComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
