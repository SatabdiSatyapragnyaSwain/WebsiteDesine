import { Component } from '@angular/core';

@Component({
  selector: 'app-count-cards',
  standalone: true,
  imports: [],
  templateUrl: './count-cards.component.html',
  styleUrl: './count-cards.component.css'
})
export class CountCardsComponent {

  HappyClients: number = 0;
  CompletedProjects: number = 0;
  HoursOfSupport: number = 0;

  ngOnInit() {
    this.animateNumber('HappyClients', 1000);
    this.animateNumber('CompletedProjects', 290);
    this.animateNumber('HoursOfSupport', 300);
  }

  animateNumber(fieldName: 'HappyClients' | 'CompletedProjects' | 'HoursOfSupport', targetValue: number) {
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
