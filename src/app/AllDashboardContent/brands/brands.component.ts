import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  images: string[] = [
    '../../../assets/Client/client-1.png',
    '../../../assets/Client/client-2.png',
    '../../../assets/Client/client-3.png',
    '../../../assets/Client/client-4.png',
    '../../../assets/Client/client-5.png',
    '../../../assets/Client/client-6.png',
    '../../../assets/Client/client-7.png',
    '../../../assets/Client/client-8.png',
  ];

  visibleImages: string[] = [];

  ngOnInit() {
    // Initialize the first 5 images
    this.visibleImages = this.images.slice(0, 5);

    // Start the loop
    setInterval(() => {
      this.updateImages();
    }, 3000);
  }

  updateImages() {
    // Remove the first image and add it to the end
    const firstImage = this.images.shift();
    if (firstImage) {
      this.images.push(firstImage);
    }

    // Update the visible images
    this.visibleImages = this.images.slice(0, 5);
  }
}
