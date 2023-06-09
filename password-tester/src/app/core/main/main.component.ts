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
  public weak: boolean = false;
  public medium: boolean = false;
  public strong: boolean = false;
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
    if (!this.passwordChecker.get('password')?.invalid) {
      this.validator.updateEnteredData(this.passwordChecker.value.password);
      this.renderStrengthLevel();
    } else {
      this.validator.clearValidation();
    }
  }

  renderStrengthLevel() {
    this.weak = this.validator.weak;
    this.medium = this.validator.medium;
    this.strong = this.validator.strong;
  }
}
