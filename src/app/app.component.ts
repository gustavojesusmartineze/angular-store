import { Component } from '@angular/core';

const name = 'Gustavo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = name;
  age = 32;
  image = 'https://source.unsplash.com/random';
  buttonDisabled = true;
  person = {
    name: 'Gustavo Martinez',
    age: 32,
    avatar: 'https://source.unsplash.com/random'
  };

  public toggleButton() {
    console.log('The form was sent');
    this.buttonDisabled = !this.buttonDisabled;
  }

  public increaseAge() {
    this.person.age += 1;
  }
}
