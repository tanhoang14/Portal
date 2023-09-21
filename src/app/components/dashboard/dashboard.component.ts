import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',  // Component selector
  templateUrl: './dashboard.component.html',  // HTML template for the component
  styleUrls: ['./dashboard.component.css']  // CSS styles for the component
})
export class DashboardComponent {
  selectedCategory: string = '';  // Variable to store the selected category
  
  // Constructor to inject dependencies (Router and AuthService)
  constructor(private router: Router, private authService: AuthService) {}

  // Method to navigate to a specific category and set selectedCategory
  navigateToCategory(category: string) {
    this.router.navigate(['dashboard', category]);  // Navigate to the specified category
    this.selectedCategory = category;  // Set the selected category
  }
    // Method to navigate to a specific category and set selectedCategory

    navigateToNewRequest(): void {
      console.log('Navigate to new request clicked');
      this.router.navigate(['dashboard/new-request']);
    }
  // Method to handle logout
  logout() {
    this.authService.logout().subscribe(
      response => {
        this.router.navigate(['']);  // Navigate to the home route after successful logout
      },
      error => {
        // Handle error (optional)
      }
    );
  }
}
