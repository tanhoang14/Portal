import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-companysettings',
  templateUrl: './companysettings.component.html',
  styleUrls: ['./companysettings.component.css']
})
export class CompanysettingsComponent implements OnInit {
  firstName: string = 'test';
  lastName: string = 'test';
  users: any[] = [];
  userForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });
  }

  ngOnInit() {}

  searchUsers() {
    if (!this.userForm) {
      console.error('userForm is null or undefined.');
      return;
    }
  
    const firstName = this.userForm.get('firstName')?.value || '';
    const lastName = this.userForm.get('lastName')?.value || '';
  
    this.authService.searchUsers(firstName, lastName)
      .subscribe(data => {
        this.users = data;
        console.log('Users:', this.users);
      }, error => {
        console.error('Error searching users:', error);
      });
  }
  

  navigateToNewUserForm() {
    this.router.navigate(['/dashboard/new-user']);
  }
}
