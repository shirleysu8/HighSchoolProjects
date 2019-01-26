import { Component, OnInit } from '@angular/core';
import { Donate } from '../donate';
import { ITEMS } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

//variables used in heroes' component, variables are exported to then use 
  permLat:number;
  permLog:number;
  zoom: number = 1;

  items = ITEMS;
  selectDonate: Donate;
    donatename: string;
    longitude: number;
    latitude: number;
    longitude1: number;
    latitude1: number;
    longitude2: number;
    latitude2: number;
    longitude3: number;
    latitude3: number;
    longitude4: number;
    latitude4: number;
    longitude5: number;
    latitude5: number;
    longitude6:number;
    latitude6: number;
    longitude7: number;
    latitude7: number;
    longitude8: number;
    latitude8: number;
    longitude9: number;
    latitude9: number;
    longitude10: number;
    latitude10: number;
    longitude11: number;
    latitude11: number;

  

   
  
  //coordinate: {'latitude': Number, 'longitude': Number}[];


  

  ngOnInit() {
    this.onSelect(this.items[0]);
    //default zoom in on this location
    this.permLat = 47;
    this.permLog = -122
  }
//declaring variables to be used throughout Heroe's component
  onSelect(item: Donate): void {
    this.selectDonate = item;
    console.log(item.name)
    this.latitude = item.latitude;
    this.latitude1 = item.latitude1;
    this.latitude2 = item.latitude2;
    this.latitude3 = item.latitude3;
    this.latitude4 = item.latitude4;
    this.latitude5 = item.latitude5;
    this.latitude6 = item.latitude6;
    this.latitude7 = item.latitude7;
    this.latitude8 = item.latitude8;
    this.latitude9 = item.latitude9;
    this.latitude10 = item.latitude10;
    this.latitude11 = item.latitude11;

    this.longitude = item.longitude;
    this.longitude1 = item.longitude1;
    this.longitude2 = item.longitude2;
    this.longitude3 = item.longitude3;
    this.longitude4 = item.longitude4;
    this.longitude5 = item.longitude5;
    this.longitude6 = item.longitude6;
    this.longitude7 = item.longitude7;
    this.longitude8 = item.longitude8;
    this.longitude9 = item.longitude9;
    this.longitude10 = item.longitude10;
    this.longitude11 = item.longitude11;


   // this.long = item.longitude;
    //this.lat = item.latitude;
    
   // console.log(typeof this.long[0])
  }
  
}


