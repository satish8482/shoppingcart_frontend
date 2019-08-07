import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

//router
import {appRoutes} from './routes'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
