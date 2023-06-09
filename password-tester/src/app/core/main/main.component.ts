import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public passwordChecker!: FormGroup;
  public weak: string = '';
  public medium: string = '';
  public strong: string = '';
  public minCharsValid: boolean = true;
  public result: string = '';

  constructor(private validator: ValidationService) {}

  ngOnInit(): void {
    this.passwordChecker = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^.{8,}$/)
      ])
    });
  }

  sendDataToValidator() {
    this.validator.updateEnteredData(this.passwordChecker.value.password);
    this.renderStrengthLevel();
  }

  renderStrengthLevel() {
    this.minCharsValid = this.validator.minimumValid;
    if (!this.validator.minimumValid) {
      this.weak = 'red';
      this.medium = 'red';
      this.strong = 'red';
      this.result = 'Min 8 characters without spaces';
    } else if (
      this.validator.minimumValid &&
      this.validator.weak &&
      !this.validator.medium &&
      !this.validator.strong
    ) {
      this.weak = 'red';
      this.medium = 'transparent';
      this.strong = 'transparent';
      this.result = 'Weak';
    } else if (
      this.validator.minimumValid &&
      this.validator.weak &&
      this.validator.medium &&
      !this.validator.strong
    ) {
      this.weak = 'yellow';
      this.medium = 'yellow';
      this.strong = 'transparent';
      this.result = 'Medium';
    } else if (
      this.validator.minimumValid &&
      this.validator.weak &&
      this.validator.medium &&
      this.validator.strong
    ) {
      this.weak = 'green';
      this.medium = 'green';
      this.strong = 'green';
      this.result = 'Strong';
    }
  }
}
