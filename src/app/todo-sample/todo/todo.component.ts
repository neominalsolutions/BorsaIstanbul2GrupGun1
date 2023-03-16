import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  TodoAddComponent,
  TodoUpdatedEvent,
} from '../todo-add/todo-add.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements AfterViewInit {
  isActive: boolean = false; // property
  selected: string = '';

  todolist: string[] = [];
  todoListConfig: any = {
    padding: '10px',
    marginTop: '30px',
  };

  // child componentteki değişikliği dinledik.
  onItemAdded(event: string) {
    console.log('event', event);

    this.todolist = [event, ...this.todolist];
    console.log('todolist', this.todolist);
    this.appTodoAdd.clearAndFocus();
  }

  onItemUpdated(event: TodoUpdatedEvent) {
    console.log('event', event);
    let item = this.todolist.find((x) => x == event.prevValue);

    console.log('item', item);

    if (item != undefined) {
      const index = this.todolist.findIndex((x) => x == item);
      this.todolist[index] = event.currentValue;

      this.todolist = [...this.todolist];

      console.log('todolist', this.todolist);
    }

    // todolist referansını güncelle
    // update sonrası selected güncelle
    // input clear
    //this.selected = '';
    // Viewchild ile component içerisindeki value değerini boşalttık.
    // this.appTodoAdd.InputValue = ''; bu kod yerine
    this.appTodoAdd.clearAndFocus();
  }

  onSelect(item: string) {
    this.selected = item;
  }

  @ViewChild('appTodoAdd') appTodoAdd!: TodoAddComponent;
  ngAfterViewInit(): void {
    // sayfa ilk yüklendiğinde InputValue boş gelsin diye çalışır.
    // this.appTodoAdd.InputValue = '';
    // component doma basılınca yapılması gereken bir işlem olduğu için afterviewinit tercih ettik.
    this.appTodoAdd.clearAndFocus();
  }
}
