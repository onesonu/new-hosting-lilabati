import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { QueryraiseComponent } from '../queryraise/queryraise.component';


@Component({
  selector: 'app-home',
  standalone:true, 
  imports: [CommonModule,RouterModule,QueryraiseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }
  isModalOpen: boolean = false;

  openQueryModal() {
    this.isModalOpen = true;
  }

  closeQueryModal() {
    this.isModalOpen = false;
  }


  redirectToSignIn() {
    this.router.navigate(['/signin']);  // Replace '/signin' with the correct path of your SignInComponent
  }
  

  @ViewChild('newsContainer', { static: false }) newsContainer!: ElementRef;

  // Testimonial data ...............................................................
  testimonials = [
    {
      date: '25 July, 2024',
      title: 'How I applying to university',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-1.jpeg',
      link: '#'
    },
    {
      date: '24 July, 2024',
      title: 'What & where choosing to study?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-2.jpeg',
      link: '#'
    },
    {
      date: '24 July, 2024',
      title: 'What & where choosing to study?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-3.jpeg',
      link: '#'
    },
    {
      date: '24 July, 2024',
      title: 'What & where choosing to study?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-4.jpeg',
      link: '#'
    },
    {
      date: '24 July, 2024',
      title: 'What & where choosing to study?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-1.jpeg',
      link: '#'
    },
    {
      date: '24 July, 2024',
      title: 'What & where choosing to study?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-2.jpeg',
      link: '#'
    },
    {
      date: '23 July, 2024',
      title: 'A day in the life of a student',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore.',
      image: 'assets/images/student-3.jpeg',
      link: '#'
    }
  ];

  // Method to scroll left
  scrollLeft() {
    const container = document.querySelector('.news-carousel') as HTMLElement;
    container.scrollLeft -= 300;  // Adjust scroll amount as needed
  }

  // Method to scroll right
  scrollRight() {
    const container = document.querySelector('.news-carousel') as HTMLElement;
    container.scrollLeft += 300;  // Adjust scroll amount as needed
  }

}
