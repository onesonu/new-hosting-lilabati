import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Class11thComponent } from '../class11th/class11th.component';

@Component({
  selector: 'app-class12th',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './class12th.component.html',
  styleUrl: './class12th.component.css'
})
export class Class12thComponent {

  class12Fees = {
    tuition: 6000,
    lab: 2500,
    sports: 1200
  };

}
