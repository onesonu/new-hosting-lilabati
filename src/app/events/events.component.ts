import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    { date: '01 Jan', year: '2024', title: 'Universities admission conference 2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '12 Jun', year: '2024', title: 'History & culture open day conference', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '15 Aug', year: '2024', title: 'Undergraduate & postgraduate event', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '11 Jan', year: '2024', title: 'Global conference on business', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '13 Jul', year: '2024', title: 'International Conference on Teacher', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '25 Sep', year: '2024', title: 'International Conference on Education', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '21 Dec', year: '2024', title: 'International Conference on Teaching', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '17 Nov', year: '2024', title: 'International Event on Educational', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '01 Jan', year: '2024', title: 'Universities admission conference 2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '12 Jun', year: '2024', title: 'History & culture open day conference', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '15 Aug', year: '2024', title: 'Undergraduate & postgraduate event', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '11 Jan', year: '2024', title: 'Global conference on business', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '13 Jul', year: '2024', title: 'International Conference on Teacher', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '25 Sep', year: '2024', title: 'International Conference on Education', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '21 Dec', year: '2024', title: 'International Conference on Teaching', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { date: '21 Dec', year: '2024', title: 'International Conference on Teaching', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' }
    
  ];

  currentPage = 1;
  itemsPerPage = 6;

  get totalPages() {
    return Array(Math.ceil(this.events.length / this.itemsPerPage)).fill(0).map((_, i) => i + 1);
  }

  get paginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.events.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) this.currentPage++;
  }
}
