import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from '../models/issue';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  public getIssues(owner: string, repo: string): Observable<Issue[]> {
    return of([{ number: 1, title: "Fake issue" }]);
  }
}
