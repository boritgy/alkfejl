import { Component, OnInit } from '@angular/core';
import { User } from 'src/domain/user';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: null,
    name: null,
    password: '',
    role: null,
    username: '',
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    const user = form.value as User;
    this.authService.register(user.name, user.username, user.password);
  }

}
