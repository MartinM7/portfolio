import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  language = true;

  changeLanguage() {
    this.language == true ? this.language = false : this.language = true;
  }
}
