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
    this.minimumValid = false;
  }

  updateEnteredData(data: string) {
    this.clearValidation();

    //contains less than 8 chars
    if (data.length < 8) {
      this.minimumValid = false;
    }
    //contains only letters/digits/symbols
    else if (
      /^[a-zA-Zа-яА-ЯёЁ]*$/.test(data) ||
      /^\d*$/.test(data) ||
      /^\W*$/.test(data)
    ) {
      this.minimumValid = true;
      this.weak = true;
      this.medium = false;
      this.strong = false;
    }
    //contains  letters-symbols/letters-digits/digits-symbols
    else if (
      /^[A-Za-zа-яА-ЯёЁ0-9]*$/.test(data) ||
      /^[A-Za-zа-яА-ЯёЁ`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data) ||
      /^[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)
    ) {
      this.minimumValid = true;
      this.medium = true;
      this.weak = true;
      this.strong = false;
    }
    //contains letters, digits and special characters
    else if (
      /^[A-Za-zа-яА-ЯёЁ0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/.test(data)
    ) {
      this.minimumValid = true;
      this.strong = true;
      this.weak = true;
      this.medium = true;
    }
  }
}
