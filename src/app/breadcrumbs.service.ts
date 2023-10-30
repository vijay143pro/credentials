import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbs: Array<{ label: string, url: string }> = [];

  addBreadcrumb(label: string, url: string) {
    this.breadcrumbs.push({ label, url });
  }

  getBreadcrumbs() {
    return this.breadcrumbs;
  }

  clearBreadcrumbs() {
    this.breadcrumbs = [];
  }
}
