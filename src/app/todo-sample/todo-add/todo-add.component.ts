import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnChanges {

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  // component  üst componente bende birşeyler oldu demesi lazım

  // bir element içerisindeki event tanımları angularda output ile yapılıyor.
  @Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Input() InputValue: any;
  @Input() editMode: boolean = false;

  add(inpt: HTMLInputElement) {
    console.log('value', inpt.value);
    this.itemAdded.emit(inpt.value); // event üzerinden data fırlatmış olduk
    inpt.value = '';
  }

  update(inpt: HTMLInputElement) {
    this.itemUpdated.emit({
      index: this.InputValue.index,
      value: inpt.value,
    });

    console.log('edit', {
      index: this.InputValue.index,
      value: inpt.value,
    });
  }

  onValueChange(value: any) {
    console.log('valueChange', value);
  }
}
