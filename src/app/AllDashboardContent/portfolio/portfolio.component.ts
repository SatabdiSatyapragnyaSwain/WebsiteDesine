import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedFilter: string = 'all';

  images = [
    { src: '../../assets/Portfolio/Portfolio1.jpeg', alt: 'Image 1', category: 'appDevelopment' },
    { src: '../../assets/Portfolio/Portfolio2.jpeg', alt: 'Image 2', category: 'branding' },
    { src: '../../assets/Portfolio/Portfolio3.jpeg', alt: 'Image 3', category: 'solutions' },
    { src: '../../assets/Portfolio/Portfolio4.jpeg', alt: 'Image 4', category: 'appDesign' },
    { src: '../../assets/Portfolio/Portfolio5.jpeg', alt: 'Image 5', category: 'appDesign' },
    { src: '../../assets/Portfolio/Portfolio6.jpeg', alt: 'Image 6', category: 'appDesign' },
    { src: '../../assets/Portfolio/Portfolio7.jpeg', alt: 'Image 7', category: 'appDesign' },
    { src: '../../assets/Portfolio/Portfolio8.jpeg', alt: 'Image 8', category: 'appDevelopment' },
    { src: '../../assets/Portfolio/Portfolio9.jpeg', alt: 'Image 9', category: 'solutions' },
    { src: '../../assets/Portfolio/Portfolio10.jpeg', alt: 'Image 10', category: 'appDevelopment' },
    { src: '../../assets/Portfolio/Portfolio11.jpeg', alt: 'Image 11', category: 'appDevelopment' },
    { src: '../../assets/Portfolio/Portfolio12.jpeg', alt: 'Image 12', category: 'branding' },
    { src: '../../assets/Portfolio/Portfolio13.jpeg', alt: 'Image 13', category: 'branding' },
    { src: '../../assets/Portfolio/Portfolio14.jpeg', alt: 'Image 14', category: 'branding' },
    { src: '../../assets/Portfolio/Portfolio15.jpeg', alt: 'Image 15', category: 'solutions' },
    { src: '../../assets/Portfolio/Portfolio16.jpeg', alt: 'Image 16', category: 'appDevelopment' },
  ];

  filteredImages = this.images;

  constructor(private renderer: Renderer2) {
    this.filterImages(this.selectedFilter);
  }

  filterImages(filter: string) {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(image => image.category === filter);
    }
  }

  ngOnInit() {
    const cardElements = document.querySelectorAll('card');
    cardElements.forEach((card, index) => {
      this.renderer.setStyle(card, 'animation-delay', `${index * 2}s`);
    });
  }
}
