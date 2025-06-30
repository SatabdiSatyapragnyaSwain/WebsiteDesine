import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-solutions.component.html',
  styleUrl: './our-solutions.component.css'
})
export class OurSolutionsComponent implements OnInit, OnDestroy {
  solutions = [
    { title: 'SafeX', description: 'DevOps Platform for readily available CICD Pipelines using Azure DevOps Services leveraging Repos, Boards and Artifactory for better traceability and Compliance.' },
    { title: 'MedEX', description: 'Report and action on connected vehicles using IOT, 4G, and Analytics.' },
    { title: 'AiKno', description: 'Rebuilding the healthcare system by integrating diverse health systems.' },
    { title: 'EDGYneer', description: 'Device Management framework deployable on-prem or cloud.' },
    { title: 'Connected Mobility', description: 'Data insights for connected vehicles.' },
    { title: 'Cybarogue', description: 'Security framework for vulnerability testing and assessment.' },
    { title: 'DAAS', description: 'Unifies medical data sources and offers analytics.' },
    { title: 'Asset Health Kit', description: 'Proactively notify asset breakdowns or plant shutdowns.' },
    { title: 'App Studio', description: 'Automate critical business processes using BPMN.' }
  ];

  displayedSolutions: any[] = [];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.updateDisplayedSolutions();

    // Set interval to update solutions every 3 seconds
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.solutions.length;
      this.updateDisplayedSolutions();
    }, 5000);
  }

  updateDisplayedSolutions() {
    const screenWidth = window.innerWidth;
    const cardsToShow = screenWidth < 768 ? 1 : 4; // 1 card for small screens, 4 for larger screens

    this.displayedSolutions = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (this.currentIndex + i) % this.solutions.length;
      this.displayedSolutions.push(this.solutions[index]);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.solutions.length;
    this.updateDisplayedSolutions();
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.solutions.length) % this.solutions.length;
    this.updateDisplayedSolutions();
  }

}
