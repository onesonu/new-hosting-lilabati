import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addmissioninfo',
  imports: [CommonModule,RouterModule],
  standalone:true,
  templateUrl: './addmissioninfo.component.html',
  styleUrl: './addmissioninfo.component.css'
})
export class AddmissioninfoComponent {
  currentSlide: number = 0;

  slides = [
    {
      image: 'assets/images/addmission_info.png',
      infoTitle: 'Admission Information',
      title: 'The Campus Experience',
      description: 'Explore our vibrant campus life with top-notch facilities and engaging activities.'
    },
    {
      image: 'assets/images/addmission_info.png',
      infoTitle: 'Academic Excellence',
      title: 'A Place for Learning and Growth',
      description: 'Join a diverse and thriving academic community with excellent faculty and programs.'
    },
    {
      image: 'assets/images/addmission_info.png',
      infoTitle: 'Your Future Starts Here',
      title: 'Discover Endless Opportunities',
      description: 'Our programs prepare you for real-world challenges and career success.'
    }
  ];

  admissionSections = [
    {
      title: 'Admission Rules',
      content: 'Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
    },
    {
      title: 'Admission Requirements',
      content: 'Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    },
    {
      title: 'Registration Procedure',
      content: 'Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.'
    },
    {
      title: 'Financial Aid',
      content: 'Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    }
  ];

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }
}