import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',  // Component selector
  templateUrl: './sign-in-form.component.html',  // HTML template for the component
  styleUrls: ['./sign-in-form.component.css'],  // CSS styles for the component
})
export class SignInFormComponent implements OnInit {
  public signInForm!: FormGroup;  // Declare a FormGroup variable for the sign-in form
  type: string = 'password';  // Initial type for the password input
  isText: boolean = false;  // Flag to indicate if the input type is text
  eyeIcon: string = 'fa-eye-slash';  // Font Awesome icon for hiding password
  showPasswordInput: boolean = false;  // Flag to show the password input

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    // Initialize the signInForm FormGroup with email and password fields and validators
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email field with required and email validators
      password: ['', Validators.required],  // Password field with required validator
    });
  }

  onKeyUp(event: any): void {
    // Toggle the showPasswordInput flag based on whether there's input in the password field
    if (event.target.value) {
      this.showPasswordInput = true;
    } else {
      this.showPasswordInput = false;
    }
  }

  ngOnInit(): void {
    // This is called when the component is initialized
  }

  goBack() {
    // Handle back button click
    console.log('Back button clicked');
  }

  onSubmit() {
    if (this.signInForm.valid) {
      // If the form is valid, attempt to login using the provided credentials
      this.auth.login(this.signInForm.value).subscribe({
        next: (res) => {
          // Display a success message and navigate to the dashboard on successful login
          alert(res.message);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          // Display an error message if login is unsuccessful
          alert(err?.error.message);
        }
      });
    }
  }
}
