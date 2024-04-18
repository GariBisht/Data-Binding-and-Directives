import { Component } from '@angular/core';
/* styles.scss */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  formValue ="";
  isBtnDisabled = false;
  myValue = "Glory";
 
  



  checkForm() {
    // if user type submit buttun its disabled the button
    if (this.formValue === 'submit') {
      this.isBtnDisabled = true;
    }
  }

   changeValue(e) {
    console.log(e.target.value);
    
   }



}
