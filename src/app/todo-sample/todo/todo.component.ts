import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  isActive: boolean = false; // property
  selected: any = {
    index: -1, // seçim yok
    value: '', // seçim olmadığında value temizle
  };

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
  }

  onItemUpdated(event: any) {
    this.todolist[event.index] = event.value;
    // todolist referansını güncelle
    // update sonrası selected güncelle
    this.selected = { index: -1, value: '' };
  }

  onSelect(item: string, index: number) {
    this.selected = { ...this.selected, index: index, value: item };
  }
}
