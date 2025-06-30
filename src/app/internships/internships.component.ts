import { Component } from '@angular/core';
import { PagenavbarComponent } from "../pagenavbar/pagenavbar.component";
import { MainInternshipsComponent } from "../AllInternships/main-internships/main-internships.component";
import { InternshipsDomainsComponent } from "../AllInternships/internships-domains/internships-domains.component";
import { YouLearnComponent } from "../AllInternships/you-learn/you-learn.component";

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [PagenavbarComponent, MainInternshipsComponent, InternshipsDomainsComponent, YouLearnComponent],
  templateUrl: './internships.component.html',
  styleUrl: './internships.component.css'
})
export class InternshipsComponent {

}
