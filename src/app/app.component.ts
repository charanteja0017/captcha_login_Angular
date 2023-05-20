import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Captcha.UI';
  username: string = '';
  password: string = '';
  captchaGenerated: boolean = false;
  captchaImage: string = '';
  captchaInput: string = '';
  captchaValid: boolean = false;
  captchaAnser :string ='';


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.generateCaptcha();
  }



  generateCaptcha(): void {
    // Generate a random captcha and its image URL
    const captcha = this.generateRandomCaptcha();
    this.captchaImage = captcha.image;
    this.captchaValid = false;
    this.captchaGenerated = true;
  }

  generateRandomCaptcha(): { image: string, answer: string } {
    // Generate a random captcha logic
    // Replace this with your actual captcha generation logic

    // Generate a random number between 1000 and 9999
    const captchaAnswer = Math.floor(Math.random() * 9000) + 1000;
    const captchaImage = `https://via.placeholder.com/150?text=${captchaAnswer}`;
    this.captchaAnser=captchaAnswer.toString();


    return { image: captchaImage, answer: captchaAnswer.toString() };
  }

  login(): void {
    // Perform login logic here



    console.log("username =",this.username,"\npassword :",this.password);
    console.log(this.captchaInput);
    console.log(this.captchaImage);
    if (this.username === 'admin' && this.password === 'password' && this.captchaInput === this.captchaAnser) {
      console.log('Login successful');
      // Redirect to dashboard or perform any other action
    } else {
      console.log('Invalid credentials or captcha not verified');
      // Show error message or perform any other action
    }
  }

}
