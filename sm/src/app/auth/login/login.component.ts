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
      username: new FormControl('', [Validators.required]),
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
    sessionStorage.clear();
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(
        (res: any) => {
          if (res?.data?.status == 'success') {
            sessionStorage.setItem('loggedInUser', JSON.stringify(res?.data));
            this.router.navigate(['/user-management']);
          } else {
            this.showSnackbarCssStyles(res?.data?.message, '', 3000);
            return;
          }
        },
        (err: any) => {
          this.showSnackbarCssStyles(err?.message, '', 3000);
        }
      );
    }
  }

  _v() {
    return this.loginForm.value;
  }
}
