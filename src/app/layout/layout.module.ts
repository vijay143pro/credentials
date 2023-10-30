import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { PrjectvaultComponent } from './prjectvault/prjectvault.component';
import { PersonalvaultComponent } from './personalvault/personalvault.component';
import { TopicsComponent } from './topics/topics.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VaultComponent } from '../components/vault/vault.component';



@NgModule({
  declarations: [

        PrjectvaultComponent,
        PersonalvaultComponent,
        TopicsComponent,
      
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    VaultComponent
  ],
  exports:[
    MatListModule, 
    VaultComponent
  ]
})
export class LayoutModule { }
