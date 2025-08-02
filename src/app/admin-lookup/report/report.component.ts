import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  facultyList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/faculty.json').subscribe(data => {
      this.facultyList = data;
    });
  }

  openReport(faculty: any): void {
    alert(`Opening report for ${faculty.name}`);
    // You can navigate or open a modal here later
  }
}
