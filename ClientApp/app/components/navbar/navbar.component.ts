import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public status: {isopen: boolean} = {isopen: false};

  constructor() { }

  ngOnInit() {
  }

  public change(value: boolean): void {
    this.status.isopen = value;
  }

  public onMouseover(){
    if(this.status.isopen == false){
      this.status.isopen = true;
    }
  }

  public onMouseleave(){
    if(this.status.isopen == true){
      this.status.isopen = false;
    }
  }

}
