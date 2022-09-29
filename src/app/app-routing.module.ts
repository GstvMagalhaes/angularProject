import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'cadastro', component: CadastroFormComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);