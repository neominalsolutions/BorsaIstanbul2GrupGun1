import { Component } from '@angular/core';

// Component deceration

class Person {
  name: string;
  id: number;
  friends: string[] = [];

  /**
   *
   */
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

@Component({
  selector: 'app-root', // componenti başka templatelarden html çağırmak için çağırma ismi
  templateUrl: './app.component.html', // component'in html dosyası konumu
  styleUrls: ['./app.component.css'], // css dosya konumu
})
export class AppComponent {
  title: string | number | undefined = 'HooksApp'; // strong typed
  // Union Type string de olabilir number da olabilir
  person: any = { id: 1, name: 'ali', friends: [{ id: 2 }] }; // js object literal yazım şekli
  // any object de olur primative type de olur. number,string,boolean

  person2: Person = new Person('ali', 1); // şema bazlı nesne tanımı intellisense sağlar.

  parentItems = [1, 2, 3];

  id: number = 1;
  visible: boolean = true;

  constructor() {
    this.person.friends.forEach((friend: any) => {
      console.log('friend', friend);
    });

    // this.person.
    // this.person2.
    // this.title = 5; // güçlü bir tip koruma özelliği var.
    // TS var JS de yok
    // Module Kavramı
    // Generic Class
    // Interfaces
    // Class based Inheritance
  }

  showMessage() {
    alert('merhaba');
    this.id = 3;
  }
}
