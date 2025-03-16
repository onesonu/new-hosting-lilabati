import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Class11thComponent } from '../class11th/class11th.component';
import { Class12thComponent } from '../class12th/class12th.component';

@Component({
  selector: 'app-feesand-costs',
  imports: [CommonModule, RouterModule,Class11thComponent, Class12thComponent],
  standalone:true,
  templateUrl: './feesand-costs.component.html',
  styleUrl: './feesand-costs.component.css'
})
export class FeesandCostsComponent {
  selectedClass: string = 'all';  // Default is 'all'

  // Method to change the selected class
  onClassSelect(className: string) {
    this.selectedClass = className;
  }


}
