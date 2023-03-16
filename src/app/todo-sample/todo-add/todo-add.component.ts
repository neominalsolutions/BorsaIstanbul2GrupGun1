import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

export type TodoUpdatedEvent = {
  prevValue: string;
  currentValue: string;
};

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnChanges {
  prevValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);

    this.prevValue = changes['InputValue'].currentValue;
  }
  // component  üst componente bende birşeyler oldu demesi lazım

  // bir element içerisindeki event tanımları angularda output ile yapılıyor.
  @Output() itemAdded: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemUpdated: EventEmitter<TodoUpdatedEvent> =
    new EventEmitter<TodoUpdatedEvent>();
  @Input() InputValue: string = '';
  @Input() editMode: boolean = false;

  add(inpt: HTMLInputElement) {
    console.log('value', inpt.value);
    this.itemAdded.emit(inpt.value); // event üzerinden data fırlatmış olduk
    inpt.value = '';
  }

  update(inpt: HTMLInputElement) {
    const event: TodoUpdatedEvent = {
      prevValue: this.prevValue,
      currentValue: inpt.value,
    };

    console.log('edit', event);

    this.itemUpdated.emit(event);
  }

  onValueChange(value: any) {
    console.log('valueChange', value);
  }

  @ViewChild('inpt', { static: true }) inpt!: ElementRef;
  clearAndFocus() {
    console.log('inpt', this.inpt);
    this.inpt.nativeElement.value = '';
    this.inpt.nativeElement.focus();
  }
}
