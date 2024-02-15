import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourseComponent } from './all-course/all-course.component';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'blog',component:BlockComponent},
  {path:'all-course',component:AllCourseComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

