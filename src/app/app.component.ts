import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Doomsday Manager';
  today = new Date().toUTCString();
  constructor() {}

  ngOnInit() {
    
  }

}
