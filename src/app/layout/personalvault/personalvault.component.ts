import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personalvault',
  templateUrl: './personalvault.component.html',
  styleUrls: ['./personalvault.component.css']
})
export class PersonalvaultComponent {
  urlValue:string='home/personalVault/projects/topic'
  projects:any=['proj1','proj2']
  // constructor(private router: Router) {}
  // navi(route: string) {
  //   this.router.navigate([route]);
  // }
}
