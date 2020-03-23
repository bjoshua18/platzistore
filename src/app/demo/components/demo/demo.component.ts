import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  names = ['nicolas', 'julian', 'byron'];

  power = 10;

  addItem(name: string) {
    this.names.push(name);
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
