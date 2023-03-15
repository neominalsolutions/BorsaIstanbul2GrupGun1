import { IMarried } from './IMarried';
import { ISgk } from './ISgk';
import { Person } from './Person';
// bir sınıfa birden fazla interface üzerinden özellik geçirilebilir.
export class Employee extends Person implements ISgk, IMarried {
  socialNumber: string;

  constructor(socialNumber: string, name: string, surname: string) {
    super(name, surname);
    this.socialNumber = socialNumber;
  }

  takeFinancialSupport(): void {
    throw new Error('Method not implemented.');
  }

  pay(): void {
    // kendi logiclerimiz sınıflar içerisinde yazabileceğimiz ama bir template görevi gören sınıflara yol gösteren rehber yapılar.
    console.log('ödeme gerçekleşti');
  }

  paid: boolean = false;

  // ovveride işlemi => base sınıftaki algoritma eğer yetersiz ise kodun polymorphic bir şekilde çalışmasını sağlar.
  override getFullName(): string {
    return super.getFullName().trim().toUpperCase(); // ALI CAN

    // return (
    //   this.name.slice(0).toUpperCase() +
    //   this.name.substring(0, this.name.length - 1) +
    //   ' ' +
    //   this.surname.toUpperCase()
    // );
  }
}

var e = new Employee('34234', 'ali', 'can');
e.getFullName(); // baseden gelen hali => ali can çağırdığımızda ovveride ettiğimiz için Ali CAN
