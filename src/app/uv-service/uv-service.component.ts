import { Component } from '@angular/core';
import { PagenavbarComponent } from "../pagenavbar/pagenavbar.component";
import { SoftwareDataComponent } from "../AllUVService/software-data/software-data.component";
import { WhatWeEnableComponent } from "../AllUVService/what-we-enable/what-we-enable.component";
import { WhatWeDeliverComponent } from "../AllUVService/what-we-deliver/what-we-deliver.component";
import { MultipleIndustriesComponent } from "../AllUVService/multiple-industries/multiple-industries.component";
import { OurComponentsComponent } from "../AllUVService/our-components/our-components.component";
import { OurSolutionsComponent } from "../AllUVService/our-solutions/our-solutions.component";
import { WhyUsComponent } from "../AllUVService/why-us/why-us.component";

@Component({
  selector: 'app-uv-service',
  standalone: true,
  imports: [PagenavbarComponent, SoftwareDataComponent, WhatWeEnableComponent, WhatWeDeliverComponent, MultipleIndustriesComponent, OurComponentsComponent, OurSolutionsComponent, WhyUsComponent],
  templateUrl: './uv-service.component.html',
  styleUrl: './uv-service.component.css'
})
export class UvServiceComponent {

}
