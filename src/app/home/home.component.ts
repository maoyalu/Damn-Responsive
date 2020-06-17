import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, FormGroupDirective, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class UrlErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlForm;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[]@!\$&'()*\+,;=.]+$/
  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.urlRegex),
  ]);
  matcher = new UrlErrorStateMatcher();
  urlSearchBoxText: string = '';
  url: string = String.raw`https:\\www.psnine.com`;


  DEVICES: string[] = ['iphone5', 'ipad'];
  devices: string[] = ['iphone5'];
  scales: number[] = [0.25, 0.5, 0.75, 1];
  selectedScale = "0.5";

  constructor(private formBuilder: FormBuilder) {
    this.urlForm = this.formBuilder.group({
      url: ''
    });
  }

  ngOnInit(): void {
  }

  deviceButtonClicked(device){

    const index = this.devices.indexOf(device);
    if(index != -1){
      this.devices.splice(index, 1);

    } else {
      this.devices.push(device);
    }
  }

  onSubmit(data){
    console.log('Before: ' + this.url);
    this.url = data.url;;
    console.log('After: ' + this.url);
    console.log(this.urlSearchBoxText);
  }

}
