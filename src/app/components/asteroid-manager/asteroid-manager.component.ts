import { Component, OnInit } from '@angular/core';
import { Asteroid } from '../../models/Asteroid';
import { AsteroidService } from '../../services/asteroid.service'



@Component({
  selector: 'app-asteroid-manager',
  templateUrl: './asteroid-manager.component.html',
  styleUrls: ['./asteroid-manager.component.css']
})
export class AsteroidManagerComponent implements OnInit {
  asteroids:Array<Asteroid>;
  
  constructor(private asteroidService:AsteroidService) { 
    this.asteroids = [];
  }
    
  ngOnInit(){
    this.asteroids = this.asteroidService.getAsteroids();
  }
}
