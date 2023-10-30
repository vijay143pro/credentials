import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home/home.module';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from "./layout/layout.module";
import { InputsComponent } from './components/inputs/inputs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { VaultComponent } from './components/vault/vault.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';






@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SidebarComponent,
        InputsComponent,
        HeaderComponent,
        BreadcrumbComponent,
       
        
       
       
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        VaultComponent,
        BrowserAnimationsModule,
       ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HomeModule,
        LayoutModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class AppModule {}
