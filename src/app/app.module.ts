//importing modules from Angular data base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    //app component involves the website's inner workings and angular's renderer
    AppComponent,
    //Heroes component is actual component of the website; includes attributes of the donation types 
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //placing google maps api key
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALM10zJ5yKsCtIwhFncZ_0QDEXrBt9vjw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
