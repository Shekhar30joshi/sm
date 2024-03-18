import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private service: CommonService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  showSnackbarCssStyles(content: any, action: any, duration: any) {
    let sb = this.snackBar.open(content, action, {
      duration: duration,
      verticalPosition: 'top',
      panelClass: ['custom-style'],
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          this.showSnackbarCssStyles('Successfully logged in !', '', 3000);
          console.log(err.message);
          this.router.navigate(['/user-management']);
        }
      );
    }
  }

  _v() {
    return this.loginForm.value;
  }
}
