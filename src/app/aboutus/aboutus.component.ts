import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports:[CommonModule,RouterModule],
  standalone:true,
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent {
  pageTitle = 'About Us';
  breadcrumb = 'About Us';

  aboutImage = '/assets/images/graduation ceremony.jpeg';
  aboutSubtitle = 'About our university';
  aboutTitle = 'Our education system inspires the next generation';
  aboutDescription = 'Lilabati is Residential Higher Secondary School for the students who wants to pursue a career in Science streem after class 10th.Our education system nurtures young minds, equipping them with knowledge and critical thinking skills to shape the future. By fostering creativity and innovation, it prepares students to tackle real-world challenges with confidence. Through modern teaching methods, we inspire the next generation to dream big and make a lasting impact.Our education system nurtures young minds, equipping them with knowledge and critical thinking skills to shape the future. By fostering creativity and innovation, it prepares students to tackle real-world challenges with confidence. Through modern teaching methods, we inspire the next generation to dream big and make a lasting impact';

  statistics = [
    { value: '5000+', label: 'Students' },
    { value: '18+', label: 'Teachers' },
    { value: '12', label: 'Subjects' },
    { value: '20+', label: 'Amenities' }
  ];

  campusImage = '/assets/images/campuslife.jpeg';
  campusSubtitle = 'Our campus information';
  campusTitle = '"We are proud to have a diverse student community that enriches our campus experience."';
  campusDescription = '"Our campus is a vibrant and dynamic environment where education goes beyond the classroom. With state-of-the-art classrooms, modern laboratories, and cutting-edge technology, we ensure our students have all the tools they need to succeed. The campus also offers dedicated spaces for research, sports, arts, and social interaction, fostering a holistic learning experience.We take pride in our lush green spaces, recreational facilities, and student-friendly zones that promote well-being and personal growth. Our diverse range of extracurricular activities, cultural events, and student organizations provide ample opportunities for students to explore their passions, develop leadership skills, and engage in meaningful experiences outside of academics.';
  campusButtonText = 'Find out more';

  professorSectionTitle = 'Director’s Message  ';
  professorSectionSubtitle = 'Empowering Minds, Shaping the Future';


  professors = [
    { name: 'Andrew M. Nichols', designation: 'MCA, PhD', message: 'At our institute, we are committed to nurturing the minds and talents of tomorrow’s leaders. Our mission is to provide a transformative educational experience that not only excels in academics but also fosters personal growth, creativity, and character development. With a dedicated team of passionate educators and a strong focus on innovation, we offer an environment that encourages curiosity, critical thinking, and a love for learning. Whether you\'re a student, parent, or faculty member, we are all part of a dynamic community working towards a common goal: excellence in education. We believe in the power of collaboration, and we encourage active involvement from all stakeholders. Together, we can create a future that’s brighter, more inclusive, and filled with endless possibilities. Thank you for being a part of Lilabati Higher Seconday School. We look forward to supporting you on your journey of growth and success.', image: '/assets/images/student-4.jpeg' }
  ];

  admissionImage = '/assets/images/addmission_info.png';
  admissionSubtitle = 'Campus experience';
  admissionTitle = 'The campus experience';
  admissionDescription = '"Our campus is more than just a place of learning; it’s a vibrant community where students, faculty, and staff come together to create an environment of growth, innovation, and collaboration. From state-of-the-art facilities to a diverse range of extracurricular activities, every aspect of our campus is designed to support and inspire every individual on their educational journey."';
  admissionButtonText = 'Find out more';
}
