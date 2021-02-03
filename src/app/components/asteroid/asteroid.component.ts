import { Component, OnInit, Input} from '@angular/core';
import { Asteroid } from '../../models/Asteroid';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent implements OnInit {
  @Input() asteroid:Asteroid;
  
  constructor() { 
    this.asteroid = new Asteroid();
  }
  
  ngOnInit() {  
  }
}
