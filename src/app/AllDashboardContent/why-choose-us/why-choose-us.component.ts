import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements AfterViewInit {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const imageContainer = this.imageContainer.nativeElement;
    const image = this.image.nativeElement;

    this.renderer.listen(imageContainer, 'mousemove', (e: MouseEvent) => {
      const { width, height, left, top } = imageContainer.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      image.style.transform = `rotateX(${deltaY * 20}deg) rotateY(${deltaX * 20}deg)`;
    });

    this.renderer.listen(imageContainer, 'mouseleave', () => {
      image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
}
