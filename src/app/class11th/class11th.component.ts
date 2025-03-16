import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Class12thComponent } from '../class12th/class12th.component';

@Component({
  selector: 'app-class11th',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './class11th.component.html',
  styleUrl: './class11th.component.css'
})
export class Class11thComponent {
  class11Fees = {
    tuition: 5000,
    lab: 2000,
    sports: 1000
  };

}
