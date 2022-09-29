import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PRIME NG COMPONETS
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {CheckboxModule} from 'primeng/checkbox';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CadastroFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
