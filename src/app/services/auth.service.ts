import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = "https://localhost:7127/api/User/"; // Base URL for API endpoints

  constructor(private http: HttpClient) { }

  // Method to initiate login by sending a POST request to the authentication endpoint
  login(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  // Method to add a new user by sending a POST request to the register endpoint
  addUser(userObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  // Method to initiate logout by sending a POST request to the logout endpoint
  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}logout`, {});
  }

  // Method to search users by first name and/or last name by sending a GET request to the search endpoint
  searchUsers(firstName: string, lastName: string): Observable<any[]> {
    let params = new HttpParams();

    // Add first name and/or last name as parameters if provided
    if (firstName) {
      params = params.set('firstName', firstName);
    }
    if (lastName) {
      params = params.set('lastName', lastName);
    }

    return this.http.get<any[]>(`${this.baseUrl}search`, { params });
  }
}
