import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public weak: boolean = false;
  public medium: boolean = false;
  public strong: boolean = false;
  constructor() {}

  clearValidation() {
    this.weak = false;
    this.medium = false;
    this.strong = false;
  }

  updateEnteredData(data: string) {
    this.clearValidation();
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //contains letters or digits orsymbols
    if (/^[a-zA-Z]*$/.test(data) || /^\d*$/.test(data) || /^\W*$/.test(data)) {
      this.weak = true;
    }
    //contains  letters-symbols/letters-digits/digits-symbols
    else if (
      /^[A-Za-z0-9]*$/.test(data) ||
      /^[A-Za-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data) ||
      /^[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)
    ) {
      this.medium = true;
    }
    //contains letters, digits and special characters
    else if (/^[A-Za-z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)) {
      this.strong = true;
    }
  }
}
