import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teachers',
  imports: [CommonModule, RouterModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers = [
    { name: 'DAndrew M. Nichols', designation: 'MCA, PhD', image: 'assets/images/student-1.jpeg' },
    { name: 'Chandra Ferrante', designation: 'Assistant Professor', image: 'assets/images/student-2.jpeg' },
    { name: 'William Johnston', designation: 'PhD, Medical Sciences', image: 'assets/images/student-3.jpeg' },
    { name: 'Charles E. Cooper', designation: 'Assistant Professor', image: 'assets/images/student-4.jpeg' },
    { name: 'Anthony Parrish', designation: 'Assistant Professor', image: 'assets/images/student-1.jpeg' },
    { name: 'Yvonne Drake', designation: 'Lecturer', image: 'assets/images/student-2.jpeg' },
    { name: 'DAndrew M. Nichols', designation: 'MCA, PhD', image: 'assets/images/student-3.jpeg' },
    { name: 'Chandra Ferrante', designation: 'Assistant Professor', image: 'assets/images/student-4.jpeg' },
    { name: 'William Johnston', designation: 'PhD, Medical Sciences', image: 'assets/images/student-1.jpeg' },
    { name: 'Charles E. Cooper', designation: 'Assistant Professor', image: 'assets/images/student-2.jpeg' },
    { name: 'Anthony Parrish', designation: 'Assistant Professor', image: 'assets/images/student-3.jpeg' },
    { name: 'Yvonne Drake', designation: 'Lecturer', image: 'assets/images/student-4.jpeg' }
  ];
}
