import { NgModule, ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule, Router } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { QualityComponent } from './components/quality/quality.component';


const appRoutes: Routes = [
    {path: '',redirectTo:'/home', pathMatch:'full'},
    {path: 'home',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'shopForParts', component: ShopComponent},
    {path: 'team', component: TeamComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'logIn', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'quality', component: QualityComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{useHash: true})],
    exports: [RouterModule]

})

export class AppRouting { }
export const routingComponents = [HomeComponent, AboutComponent, ShopComponent, TeamComponent, ContactComponent, LoginComponent, RegisterComponent, QualityComponent, ErrorComponent]

