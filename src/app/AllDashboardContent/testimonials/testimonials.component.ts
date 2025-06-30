import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = [
    { image: '../../../assets/Testimonial/testimonial-1.jpg', name: 'Jhone Doe', title: 'CFO', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.' },
    { image: '../../../assets/Testimonial/testimonial-2.jpg', name: 'Afa Rose', title: 'Web Designer', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.' },
    { image: '../../../assets/Testimonial/testimonial-3.jpg', name: 'Keena Lara', title: 'Store Owner', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.' },
    { image: '../../../assets/Testimonial/testimonial-4.jpg', name: 'Fizzi Brandon', title: 'Freelancer', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.' }
  ];

  stars = [1, 2, 3, 4, 5];

  activeButton = 1;

  isSmallScreen: boolean = window.innerWidth <= 768;

  intervalId: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  ngOnInit() {
    // Set interval to change button every 3 seconds
    this.intervalId = setInterval(() => {
      this.activeButton = (this.activeButton % 4) + 1;  // Cycle through buttons 1 to 4
    }, 3000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getVisibleTestimonials() {
    if (this.isSmallScreen) {
      return [this.testimonials[this.activeButton - 1]];
    } else {
      const startIndex = this.activeButton - 1;
      const endIndex = (startIndex + 2) % this.testimonials.length;
      return [
        this.testimonials[startIndex],
        this.testimonials[(startIndex + 1) % this.testimonials.length],
        this.testimonials[(startIndex + 2) % this.testimonials.length]
      ];
    }
  }

  setActiveButton(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }
}
