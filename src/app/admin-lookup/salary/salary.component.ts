import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  salaryPerHour: number = 0;
  facultyList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<any[]>('assets/faculty.json').subscribe(data => {
    const appraisals = JSON.parse(localStorage.getItem('appraisals') || '{}');

    this.facultyList = data.map(faculty => ({
      ...faculty,
      paid: false,
      appraisal: appraisals[faculty.id] || 0
    }));
  });
}


  saveSalary(): void {
    alert(`Salary set to ₹${this.salaryPerHour} per hour`);
    // Optionally: apply this rate to all faculty entries or save it somewhere
  }

  markAsPaid(faculty: any) {
  faculty.paid = true;
}

}
