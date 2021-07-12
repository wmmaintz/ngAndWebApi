import { Component, OnInit} from '@angular/core';
import { Title } from "@angular/platform-browser"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private title: Title){}

  ngOnInit(){
    this.title.setTitle("Maintz Home");
  }
}
