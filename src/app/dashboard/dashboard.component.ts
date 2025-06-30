import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardsComponent } from "../AllDashboardContent/dashboard-cards/dashboard-cards.component";
import { WhyChooseUsComponent } from "../AllDashboardContent/why-choose-us/why-choose-us.component";
import { PortfolioComponent } from "../AllDashboardContent/portfolio/portfolio.component";
import { PricingPlansComponent } from "../AllDashboardContent/pricing-plans/pricing-plans.component";
import { TestimonialsComponent } from "../AllDashboardContent/testimonials/testimonials.component";
import { CountCardsComponent } from "../AllDashboardContent/count-cards/count-cards.component";
import { BrandsComponent } from "../AllDashboardContent/brands/brands.component";
import { FaqComponent } from "../AllDashboardContent/faq/faq.component";
import { DiscussProjectsComponent } from "../AllDashboardContent/discuss-projects/discuss-projects.component";
import { BlogsComponent } from "../AllDashboardContent/blogs/blogs.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { HeaderbarComponent } from "../headerbar/headerbar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, DashboardCardsComponent, WhyChooseUsComponent, PortfolioComponent, PricingPlansComponent, TestimonialsComponent, CountCardsComponent, BrandsComponent, FaqComponent, DiscussProjectsComponent, BlogsComponent, ContactusComponent, HeaderbarComponent],
})
export class DashboardComponent {
}
