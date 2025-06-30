import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-what-we-enable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-we-enable.component.html',
  styleUrl: './what-we-enable.component.css',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class WhatWeEnableComponent implements OnInit, OnDestroy {
  activeSection: string = 'Strategy';
  sections: string[] = ['Strategy', 'Design', 'Build', 'Generate', 'Operate'];
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoChange();
  }

  startAutoChange(): void {
    let index = 0;
    this.intervalId = setInterval(() => {
      this.activeSection = this.sections[index];
      index = (index + 1) % this.sections.length;
    }, 30000);
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
    clearInterval(this.intervalId);
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
