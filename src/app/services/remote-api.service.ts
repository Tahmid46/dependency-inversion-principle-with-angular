import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';
import { ApiService } from './api-service';


@Injectable()
export class RemoteApiService implements ApiService {

  private readonly baseGithubApi = `https://api.github.com/repos`;

  constructor(private httpClient: HttpClient) { }

  getIssues(owner: string, repo: string): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(`${this.baseGithubApi}/${owner}/${repo}/issues`);
  }
}
