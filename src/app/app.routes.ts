import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { UvServiceComponent } from './uv-service/uv-service.component';
import { InternshipsComponent } from './internships/internships.component';
export const routes: Routes = [
  {
    path: 'Home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'Contactus', component: ContactusComponent },
      { path: 'AboutUs', component: AboutUsComponent },
      { path: 'Careers', component: CareersComponent },
      { path: 'Service', component: UvServiceComponent },
      { path: 'Internships', component: InternshipsComponent },
    ],
  },
  { path: '', redirectTo: '/Home/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home/dashboard' }
];