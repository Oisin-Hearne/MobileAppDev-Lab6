import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service'; //Import the service we created.
import { WeatherService } from './weather.service'; //Import the newly created weather service.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //OnInit is something we can import to make this run on initialization.
  myStudents:any[]=[];
  myWeather:any[]=[];

  //We must also use a constructor in the component, to create an instance of our Student Service.
  constructor(private serv:StudentService, private weatherServ:WeatherService) {}

  ngOnInit(): void { //This method will be ran when this component is activated.
   
    //Using .subscribe invokes the method asynchronously.
    //Then, it will run the code within the brackets. We can use a lambda for this.
    this.serv.GetStudentData().subscribe(
      (data)=>{
        //Do stuff with the data we found here.
        this.myStudents = data.students; //data.students returns only the array of students from our API.
      }); 

      //Also get Weather Data
    this.weatherServ.WeatherReport().subscribe(
      (data)=>{
        this.myWeather = data.weather;
      }
    );
  }
}


