import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prjectvault',
  templateUrl: './prjectvault.component.html',
  styleUrls: ['./prjectvault.component.css']
})
export class PrjectvaultComponent {
 urlValue: any = 'home/projectVault/projects/topic';
  projects:any=['proj1','proj2','proj3']
}
