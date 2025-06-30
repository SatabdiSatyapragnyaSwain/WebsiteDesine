import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-deliver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-we-deliver.component.html',
  styleUrl: './what-we-deliver.component.css'
})
export class WhatWeDeliverComponent implements OnInit {
  visibleCardIndex: number = 0;

  cards = [
    { title: "Experience", image: "assets/Service/Experience.png", items: ["Satisfaction", "Ease of Use", "Error Prevention", "Productivity", "Reduced Support"] },
    { title: "Architecture", image: "assets/Service/Architecture.png", items: ["Time To Market", "Minimal Development", "Pre-Built Tools", "Multi-platforms", "Future Proofing"] },
    { title: "Cloud", image: "assets/Service/Cloud.png", items: ["Scalability", "Agility", "Continuous Uptime", "Reduced Capex", "Streamlined Opex"] },
    { title: "DevOps", image: "assets/Service/Cloud.png", items: ["Lead Time", "Reduced Rework", "Faster Failure Recovery", "Deployment Frequency", "Development Spend"] },
    { title: "Security", image: "assets/Service/Security.png", items: ["Reputation", "Data Safety", "Uninterrupted Ops", "Reduced Incidents", "Compliance"] },
    { title: "Analysis", image: "assets/Service/Analysis.png", items: ["Customer Insights", "Shop Floor Intelligence", "Proactive Maintenance", "Supply Chain Optimization"] },
    { title: "IOT", image: "assets/Service/IOT.png", items: ["Revenue Models", "Reduced OpeX", "Real-time Insights", "Data-driven Decisions", "Service Automation"] }
  ];

  ngOnInit() {
    setInterval(() => {
      this.nextCard();
    }, 5000);
  }

  nextCard() {
    this.visibleCardIndex = (this.visibleCardIndex + 1) % this.cards.length;
  }

  prevCard() {
    this.visibleCardIndex = (this.visibleCardIndex - 1 + this.cards.length) % this.cards.length;
  }
}