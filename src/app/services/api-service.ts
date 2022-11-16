import { Observable } from "rxjs";
import { Issue } from "../models/issue";

export abstract class ApiService {
  abstract getIssues(owner: string, repo: string): Observable<Issue[]>;
}