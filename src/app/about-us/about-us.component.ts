import { Component } from '@angular/core';
import { WhoWeAreComponent } from "../AllAboutData/who-we-are/who-we-are.component";
import { CommonModule } from '@angular/common';
import { CompanyHistoryComponent } from "../AllAboutData/company-history/company-history.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, WhoWeAreComponent, CompanyHistoryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
