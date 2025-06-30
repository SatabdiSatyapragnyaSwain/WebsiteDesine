import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-multiple-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-industries.component.html',
  styleUrl: './multiple-industries.component.css'
})
export class MultipleIndustriesComponent implements OnInit, OnDestroy {
  selectedCard: any;
  currentIndex: number = 0;
  intervalId: any;

  cards = [
    { button: "Transportation", image: "assets/Service/Transportation.png", items: ["Connected Vehicles on the Cloud", "Fleet Management", "Cybersafe Vehicles", "Connected Aircrafts", "Connected Airports", "AR-VR for Interactive Maintenance"] },
    { button: "Medical & Lifesciences", image: "assets/Service/Medical&LifeSciences.png", items: ["On-Demand Healthcare", "VR-Enabled Treatments", "Wearable Med Tech", "Healthcare IoT Platforms", "Predictive Maintenance"] },
    { button: "Industrial Products", image: "assets/Service/IndustrialProducts.png", items: ["Predictive Maintenance", "Automated Service Support", "Asset Tracking & Performance Monitoring", "Smart Building Automation", "Connected Worker Safety", "Mobile Monitoring & Control"] },
    { button: "Plant Engineering", image: "assets/Service/PlantEngineering.jpeg", items: ["Immersive Experiences for Plant Design", "Digital Twin", "24*7 Security Operations Centre", "Plant Remote Monitoring", "Machine Predictive & Prescriptive Analytics", "Connected Worker Safety"] },
    { button: "Telecom & Hitech", image: "assets/Service/Telecom&Hitech.jpeg", items: ["Open Network Automation", "5G enabled applications & services", "IoT Service & Platform enablement", "Smart TV Applications", "Immersive Experiences for OTT"] },
  ];

  ngOnInit() {
    this.selectedCard = this.cards[this.currentIndex];

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.selectedCard = this.cards[this.currentIndex];
    }, 10000);
  }

  selectCard(card: any) {
    this.selectedCard = card;
    this.currentIndex = this.cards.indexOf(card);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
