import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.css']
})
export class MemberInfoComponent implements OnInit {
  faculty: any;
  reviewText: string = '';
  appraisalAmount: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any[]>('assets/faculty.json').subscribe(data => {
      this.faculty = data.find(member => member.id === id);
    });
  }

  submitReview(): void {
    alert(`Review for ${this.faculty.name} submitted:\n\n"${this.reviewText}"`);
    this.reviewText = '';
  }

  saveAppraisal(): void {
  const appraisals = JSON.parse(localStorage.getItem('appraisals') || '{}');
  appraisals[this.faculty.id] = this.appraisalAmount;
  localStorage.setItem('appraisals', JSON.stringify(appraisals));

  alert(`Appraisal of ₹${this.appraisalAmount} saved for ${this.faculty.name}`);
  this.appraisalAmount = 0;
}

}
