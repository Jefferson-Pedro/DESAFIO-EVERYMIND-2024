import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';

  formLogin = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  firstFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    senha: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
    crn: ['', Validators.required],
  });

  isEditable = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  public onSubmit() {}

  public login() {}
}
