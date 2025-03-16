import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { AddmissioninfoComponent } from './addmissioninfo/addmissioninfo.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { SigninComponent } from './signin/signin.component';
import { QueryraiseComponent } from './queryraise/queryraise.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeesandCostsComponent } from './feesand-costs/feesand-costs.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path: 'applicationform', component:ApplicationFormComponent },
    {path: 'teachers', component:TeachersComponent },
    {path: 'contactus', component:ContactusComponent },
    {path: 'courses', component:CoursesComponent },
    {path: 'addmissioninfo', component:AddmissioninfoComponent },
    {path: 'aboutus', component:AboutUsComponent},
    {path: 'events', component:EventsComponent},
    {path: 'signin', component:SigninComponent},
    {path: 'signup', component:SignUpComponent},
    {path: 'query', component:QueryraiseComponent},
    {path: 'fees', component:FeesandCostsComponent},
    {path: 'gallery', component:GalleryComponent}



];
