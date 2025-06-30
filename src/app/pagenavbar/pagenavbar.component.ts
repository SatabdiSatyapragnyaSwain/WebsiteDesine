import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pagenavbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagenavbar.component.html',
  styleUrl: './pagenavbar.component.css'
})
export class PagenavbarComponent {

  isNavbarVisible: boolean = false; //For Navbar
  isScrolled = false; //For Screen Scroll Color Change
  currentHeading: string = ''; // Get Text For Heading
  backgroundImage: string = ''; // Get BackGround Image

  //Get Bot Messages
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

    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateHeading(event.url);
      }
    });

    // Initialize heading on page load
    this.updateHeading(this.router.url);
  }

  ngOnDestroy() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  onNavItemClick() {
    this.isNavbarVisible = false;
  }

  isChildRouteActive(routePaths: string[]): boolean {
    return routePaths.some((route) => this.router.url.includes(route));
  }

  // Determine if the "Company" section should be active
  isCompanyActive(): boolean {
    const companyRoutes = ['/Home/AboutUs', '/Home/Careers', '/Home/PressCenter', '/Home/Contactus'];
    return this.isChildRouteActive(companyRoutes);
  }

  // Display a new message every 10 seconds
  startMessageQueue() {
    this.showMessage = true;
    this.displayMessage();
    this.messageInterval = setInterval(() => {
      this.displayMessage();
    }, 10000);
  }

  // Reset to loop the messages
  displayMessage() {
    if (this.messageIndex < this.messageQueue.length) {
      this.currentMessage = this.messageQueue[this.messageIndex];
      this.messageIndex++;
    } else {
      this.messageIndex = 0;
    }
  }

  // Stop the interval when the message is closed
  closeMessage() {
    this.showMessage = false;
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }

  // For Windows Scroll 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50;
  }

  // Get the Heading and BackgroundImage for the Specific Page
  updateHeading(url: string) {
    if (url.includes('/Home/Service')) {
      this.currentHeading = 'Our Services';
      this.backgroundImage = '../../assets/ServiceBG.png';
    } else if (url.includes('/Home/Contactus')) {
      this.currentHeading = 'Our Contacts';
      this.backgroundImage = '../../assets/ContactUSBG.png';
    } else if (url.includes('/Home/AboutUs')) {
      this.currentHeading = 'About Us';
      this.backgroundImage = '../../assets/AboutBG.png';
    } else if (url.includes('/Home/Internships')) {
      this.currentHeading = 'Internships';
      this.backgroundImage = '../../assets/InternshipsBG.png';
    } else if (url.includes('/Home/Careers')) {
      this.currentHeading = 'Careers';
      this.backgroundImage = '../../assets/CareersBG.jpeg';
    } else {
      this.currentHeading = 'Welcome';
      this.backgroundImage = '../../assets/DefaultBG.png';
    }
  }

}
