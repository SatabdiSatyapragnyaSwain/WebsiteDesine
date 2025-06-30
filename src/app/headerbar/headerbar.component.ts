import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css'],
  imports: [RouterModule, CommonModule],
})
export class HeaderbarComponent implements OnInit, OnDestroy {
  isNavbarVisible: boolean = false;
  isScrolled = false;
  showMessage = false;
  currentMessage: string = '';
  messageQueue: string[] = [
    'Welcome to UV Software Labs',
    'Innovative IT Solutions for your business',
    'Transforming your vision into reality',
    'Empowering enterprises with cutting-edge technology',
    'Join our team, make an impact'
  ];
  messageIndex = 0;
  messageInterval: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startMessageQueue();
  }

  ngOnDestroy() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  isChildRouteActive(routePaths: string[]): boolean {
    return routePaths.some((route) => this.router.url.includes(route));
  }

  onNavItemClick() {
    this.isNavbarVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    if (
      this.isNavbarVisible &&
      !targetElement.closest('.navbar') &&
      !targetElement.closest('.hamburger')
    ) {
      this.isNavbarVisible = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50;
  }

  getDropdownStyle() {
    return this.isScrolled ? { color: '#000' } : { color: '#FFF' };
  }

  startMessageQueue() {
    this.showMessage = true;
    this.displayMessage();
    this.messageInterval = setInterval(() => {
      this.displayMessage();
    }, 10000); // Display a new message every 10 seconds
  }

  displayMessage() {
    if (this.messageIndex < this.messageQueue.length) {
      this.currentMessage = this.messageQueue[this.messageIndex];
      this.messageIndex++;
    } else {
      this.messageIndex = 0; // Reset to loop the messages
    }
  }

  closeMessage() {
    this.showMessage = false;
    if (this.messageInterval) {
      clearInterval(this.messageInterval); // Stop the interval when the message is closed
    }
  }
}
