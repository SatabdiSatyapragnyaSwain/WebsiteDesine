import { Component } from '@angular/core';
import { TeamComponent } from "../../AllDashboardContent/team/team.component";
import { BrandsComponent } from "../../AllDashboardContent/brands/brands.component";

@Component({
  selector: 'app-company-history',
  standalone: true,
  imports: [TeamComponent, BrandsComponent],
  templateUrl: './company-history.component.html',
  styleUrl: './company-history.component.css'
})
export class CompanyHistoryComponent {

  HappyClients: number = 0;
  CompletedProjects: number = 0;
  HoursOfSupport: number = 0;
  WebsiteAnalyse: number = 0;

  ngOnInit() {
    this.animateNumber('HappyClients', 1000);
    this.animateNumber('CompletedProjects', 290);
    this.animateNumber('HoursOfSupport', 300);
    this.animateNumber('WebsiteAnalyse', 99);
  }

  animateNumber(fieldName: 'HappyClients' | 'CompletedProjects' | 'HoursOfSupport' | 'WebsiteAnalyse', targetValue: number) {
    let count = 1;
    const duration = 10000;
    const intervalTime = duration / targetValue;
    const interval = setInterval(() => {
      if (count <= targetValue) {
        (this as any)[fieldName] = count;
        count++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }
}
