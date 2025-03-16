import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  dateTime:String=''; //date set
  isSticky: boolean = false;


  constructor(){

    //automatically dat set
    setInterval(()=>{
      let currentdate = new Date();
      this.dateTime = currentdate.toDateString()+" " + currentdate.toLocaleTimeString();
    }, 1000)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 100; // Change value based on when you want the navbar to stick
  }

  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

}
