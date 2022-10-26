import { Component } from '@angular/core';
import { Product } from './product.model';

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

  emojis: string[] = [ '😂' , '🐦', '🐳', '🌮', '💚'];

  names: string[] = [ 'Gustao'];

  newName = '';

  color: string = 'red';

  italic = 'italic';

  imageWidth = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: ''
  }

  addName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName() {
    const index = this.names.indexOf(this.newName);
    this.names.splice(index, 1);
  }

  deleteNameParameter(index: number) {
    this.names.splice(index, 1);
  }

  public toggleButton() {
    console.log('The form was sent');
    this.buttonDisabled = !this.buttonDisabled;
  }

  public increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;

    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
    console.log(element.value);
  }

  products: Product[]  = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  onRegister() {
    console.log(this.register);
  }
}
