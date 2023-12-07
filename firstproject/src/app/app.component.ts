import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Info } from './models/student.model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// Component class
export class AppComponent {
  title = 'frontend';
  students: Info[] = [];
  id = '';

  // studentForm using FormGroup
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9 ]{11,14}'),
    ]),
  });

  // Constructor of the class
  constructor(
    private router: Router,
    private studentService: StudentService,
    
  ) {}

  // life cycle hook
  ngOnInit() {
    // load all the students info on the frontend using getStudentsInfo method from the service class
    this.studentService.getStudentsInfo().subscribe({
      next: (students: Info[]) => {
        this.students = students;
      },
    });
  }

  // onSubmit method to push the form data to db using createStudentsInfo method from the service class
  onSubmit() {
    if (!this.studentForm.valid) {
        
      
      return;
    }

    this.studentService.createStudentInfo(this.studentForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
       
      },
    });
    this.studentForm.reset();
  }

  // delete a student info using deleteStudentsInfo method from the service class
  deleteStudent = (id: string) => {
    this.studentService.deleteStudentInfo(id).subscribe({
      next: () => {
        
        this.students = this.students.filter((student) => student._id != id);
      },
    });
  };
}
