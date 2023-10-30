import { Component } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs.service';
import { Router, NavigationEnd } from '@angular/router';
interface RouteData {
  breadcrumb: string;
}
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(
    private breadcrumbsService: BreadcrumbsService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs();
      }
    });
  }

  updateBreadcrumbs() {
    this.breadcrumbsService.clearBreadcrumbs();

    
    const rootUrl = this.router.url.split('?')[0]; 
    const segments = rootUrl.split('/');

    let url = '';
    segments.forEach((segment) => {
      url += `/${segment}`;
      const route = this.router.config.find((r) => r.path === url);
      if (route) {
        const data = route.data as RouteData; 
        if (data && data.breadcrumb) {
          this.breadcrumbsService.addBreadcrumb(data.breadcrumb, url);
        }
      }      
    });

    // Get and set the updated breadcrumbs
    this.breadcrumbs = this.breadcrumbsService.getBreadcrumbs();
  }
}
