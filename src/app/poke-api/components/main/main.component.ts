import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  namePokemon: string = '';
  constructor() { }
  showDetails = false
  ngOnInit(): void {
  }
  getName(name: string) {
    this.showDetails = true;
    console.log(name);
    
  }

}
