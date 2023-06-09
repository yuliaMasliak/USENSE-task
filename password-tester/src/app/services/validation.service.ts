import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public minimumValid: boolean = false;
  public weak: boolean = false;
  public medium: boolean = false;
  public strong: boolean = false;

  clearValidation() {
    this.weak = false;
    this.medium = false;
    this.strong = false;
  }

  updateEnteredData(data: string) {
    this.clearValidation();

    //contains min 8 chars
    if (data.length <= 8) {
      this.minimumValid = false;
    } else if (
      /^[a-zA-Z]*$/.test(data) ||
      /^\d*$/.test(data) ||
      /^\W*$/.test(data)
    ) {
      this.minimumValid = true;
      this.weak = true;
    }
    //contains  letters-symbols/letters-digits/digits-symbols
    else if (
      /^[A-Za-z0-9]*$/.test(data) ||
      /^[A-Za-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data) ||
      /^[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)
    ) {
      this.minimumValid = true;
      this.medium = true;
    }
    //contains letters, digits and special characters
    else if (/^[A-Za-z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)) {
      this.minimumValid = true;
      this.strong = true;
    }
  }
}
