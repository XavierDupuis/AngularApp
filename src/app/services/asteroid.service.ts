import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Asteroid } from '../models/Asteroid';

@Injectable({
  providedIn: 'root'
})

export class AsteroidService {
  startDate:string = "2021-02-02";
  endDate:string = "2021-02-02";
  apiKey:string = "YlVlxokIFQldz33aamsUXJYBx5F3xJijjrYZBnTC";
  private asteroidsURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.startDate}&end_date=${this.endDate}&api_key=${this.apiKey}`;

  constructor(private http:HttpClient) { 
  }

  getAsteroids():Array<Asteroid>{
    let asteroidsList = new Array<Asteroid>();
    this.http.get<any>(this.asteroidsURL).toPromise().then(data => {
      for(let i = 0; i < data["element_count"]; i++)
      {
        let astFromData = data["near_earth_objects"][this.startDate][i]
        let formattedAst = new Asteroid();
        formattedAst.id = astFromData["id"];
        formattedAst.name = astFromData["name"];
        
        let diameter = astFromData["estimated_diameter"]["meters"];
        formattedAst.diameter_min = diameter["estimated_diameter_min"];
        formattedAst.diameter_max = diameter["estimated_diameter_max"];

        let approach_data = astFromData["close_approach_data"][0]
        formattedAst.miss_date = approach_data["close_approach_date"];
        formattedAst.miss_distance = approach_data["miss_distance"]["kilometers"];
        asteroidsList.push(formattedAst);
      }
    });
    return asteroidsList;
  }
}
