import { Component, OnInit } from '@angular/core';
import { Issue } from '../models/issue';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  issues: Issue[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getIssues('dotnet', 'runtime').subscribe(issues => {
      this.issues = issues;
      console.log(this.issues);
    });
  }

}
