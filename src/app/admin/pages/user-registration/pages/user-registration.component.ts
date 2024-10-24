import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { environment } from '../../../enviroments/enviroment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../../../../lib/src/dialog/components/dialog.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnDestroy {
  registrationForm: FormGroup;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      const { username, email, password } = this.registrationForm.value;
      try {
        const res = await this.userService.registerUser(this.apiUrl, username, email, password, true);
        this.dialog.open(DialogMessageComponent, {
          data: {
            isSuccess: true,
            message: 'Tu registro se completó con éxito.'
          }
        });
      } catch (err) {
        this.dialog.open(DialogMessageComponent, {
          data: {
            isSuccess: false,
            message: 'Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.'
          }
        });
      }
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next('Nothing');
    this._unsubscribeAll.complete();
  }
}
