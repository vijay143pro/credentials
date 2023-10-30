import { CommonModule } from '@angular/common';

import {Component,Input,NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router ,RouterModule} from '@angular/router';
@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css'],
  standalone: true,
  imports: [
   MatSidenavModule,RouterModule,CommonModule],
})

export class VaultComponent {
  @Input() url:any;
  @Input() projects:any=[]
  id:any=12
  constructor(private router: Router) {}
  navi(route: string,id:any) {
    this.router.navigate([route,id]);
  }
}
