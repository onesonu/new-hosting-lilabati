import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-application-form',
  standalone: true,   // Standalone component
  imports: [CommonModule, ReactiveFormsModule, RouterModule],  // Necessary imports for standalone components
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {
  
  applicationForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  statuses = ['Passd Out'];

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      guardianName: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      presentAddress: ['', Validators.required],
      dob: ['', Validators.required],
      school: ['', Validators.required],
      completionYear: ['', Validators.required],
      schoolLocation: ['', Validators.required],
      currentStatus: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      console.log('Form Data:', this.applicationForm.value);
      
      // Prepare the data to be sent via email
      const formData = {
        fullName: this.applicationForm.value.fullName,
        gender: this.applicationForm.value.gender,
        studentPhoto: this.applicationForm.value.studentPhoto,
        passport: this.applicationForm.value.passport,
        guardianName: this.applicationForm.value.guardianName,
        contact: this.applicationForm.value.contact,
        email: this.applicationForm.value.email,
        presentAddress: this.applicationForm.value.presentAddress,
        dob: this.applicationForm.value.dob,
        nationalId: this.applicationForm.value.nationalId,
        studentType: this.applicationForm.value.studentType,
        school: this.applicationForm.value.school,
        completionYear: this.applicationForm.value.completionYear,
        schoolLocation: this.applicationForm.value.schoolLocation,
        currentStatus: this.applicationForm.value.currentStatus,
        studyArea: this.applicationForm.value.studyArea,
        degreeLevelRepeat: this.applicationForm.value.degreeLevelRepeat,
      };

      // Send email using EmailJS
      emailjs.send('service_kmmqa3w', 'template_0zz2i2c', formData, 'Tg_ShbfdeNwrMlQY0')
        .then((response) => {
          console.log('Email sent successfully', response);
          alert('Application submitted successfully! Our team will connect you soon');
        })
        .catch((error) => {
          console.error('Error sending email', error);
          alert('There was an error while submitting your application. Please try again.');
        });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
