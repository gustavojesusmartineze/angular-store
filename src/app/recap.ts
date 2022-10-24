const username: string | number = 'gustavomartineze';

const sum = (a: number, b: number) => {
  return a + b;
}

const sumResult = sum(5500, 6500);


class Person {
  protected age: number;

  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }

  public getAge() : number {
    return this.age;
  }
}

class PersonSame {
  constructor(protected age: number, public lastName: string) { }

  public getAge() : number {
    return this.age;
  }
}


const gustavo = new Person(32, 'Martinez');

console.log(gustavo.lastName);
console.log(gustavo.getAge());


const claudia = new PersonSame(32, 'Ascenzi');

console.log(claudia.lastName);
console.log(claudia.getAge());
