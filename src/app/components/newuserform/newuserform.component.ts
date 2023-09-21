import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuserform',  // Component selector
  templateUrl: './newuserform.component.html',  // HTML template for the component
  styleUrls: ['./newuserform.component.css']  // CSS styles for the component
})
export class NewuserformComponent {
  userForm: FormGroup;  // FormGroup for user details

  // Constructor to inject dependencies (Router, AuthService, FormBuilder)
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    // Initialize the userForm FormGroup with predefined structure and validators
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],  // First name with required validator
      lastName: ['', Validators.required],  // Last name with required validator
      role: ['Admin'],  // Default role
      email: ['', [Validators.required, Validators.email]],  // Email with required and email validators
      loginMethod: ['Password']  // Default login method
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.userForm.valid) {
      // If the form is valid, attempt to add the user
      this.authService.addUser(this.userForm.value).subscribe(
        response => {
          alert('User added successfully!');  // Display success message
        },
        error => {
          alert('Error adding user!');  // Display error message if user addition fails
        }
      );
    } else {
      alert('Please fill out all the required fields.');  // Display message for incomplete form
    }
  }

  // Method to cancel the form and navigate to company settings
  cancelForm() {
    this.router.navigate(['/dashboard/company-settings']);  // Navigate to company settings
  }
}
