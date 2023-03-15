// javascript dosyasının dışarı çıkarmak için typescripte export keyword kullanıyoruz
export class Person {
  private name: string; // default access modifier public
  protected surname: string; // kalıtım alınan sınıflardan erişmemizi sağlar.

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  // ovveride edilmez ise kod logic buradan çalışacaktır.
  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}
