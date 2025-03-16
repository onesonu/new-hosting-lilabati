import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { title: 'MIL(Odia)', description: 'MIL Odia refers to the study and use of the Odia language as part of the Modern Indian Languages curriculum in education.', image: 'assets/images/courses/botany.jpeg' },
    { title: 'English', description: 'English is the study of language, literature, and communication skills in both written and spoken form', image: 'assets/images/courses/english.jpeg' },
    { title: 'Physics', description: 'Physics is the branch of science concerned with the nature and properties of matter and energy.', image: 'assets/images/courses/physics.jpeg' },
    { title: 'Chemetsry', description: 'Chemistry is the study of substances, their properties, reactions, and the changes they undergo.', image: 'assets/images/courses/chemestry.jpeg' },
    { title: 'Mathematics', description: 'Mathematics is the abstract science of numbers, quantities, shapes, and patterns.', image: 'assets/images/courses/mathematics.jpeg' },
    { title: 'Botany', description: 'Botany is the scientific study of plants, including their structure, properties, and biochemical processes.', image: 'assets/images/courses/botany.jpeg' },
    { title: 'Zoology', description: 'Zoology is the branch of biology that deals with the study of animals and their behavior, structure, and classification.', image: 'assets/images/courses/zoology.jpeg' },
    { title: 'Information Technology', description: 'Information Technology involves the use of computers and software to manage, process, and store data.', image: 'assets/images/courses/botany.jpeg' },
    { title: 'Geology', description: 'Geology is the study of the Earths physical structure, history, and processes that shape it over time', image: 'assets/images/courses/geology.jpeg' }
    
  ];

}
