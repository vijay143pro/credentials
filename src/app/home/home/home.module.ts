// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home.component'; 
import { MatListModule } from '@angular/material/list';
import { PrjectvaultComponent } from 'src/app/layout/prjectvault/prjectvault.component';
import { PersonalvaultComponent } from 'src/app/layout/personalvault/personalvault.component';
import { TopicsComponent } from 'src/app/layout/topics/topics.component';
import { VaultComponent } from 'src/app/components/vault/vault.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:{
      breadcrumb:'home'
    },
    children: [
      {
        path: 'projectVault/projects',
        component: PrjectvaultComponent,
        data:{
          breadcrumb:'projectVault/projects'
        },
        children:[
          {
            path: 'topic/:id',
            component: TopicsComponent,
            data:{
              breadcrumb:'topic'
            }
          },
        ]
      },
      {
        path: 'personalVault/projects',
        component: PersonalvaultComponent,
        data:{
          breadcrumb:'personalVault/projects'
        },
        children:[
          {
            path:'topic/:id',
            component:TopicsComponent,
            data:{
              breadcrumb:'projectVault/projects'
            }
          }
        ]
      }
    ],
  },
];

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutModule,
    RouterModule.forChild(routes), 
    MatListModule,
    VaultComponent
    
  ],
  exports: [MatSidenavModule, LayoutModule, RouterModule],
})
export class HomeModule { }
