import { fade } from './../../animations/fade.animation';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fade]
})
export class AppComponent {

    isVisible: boolean = false;
    onAddToStudySheet(){
        this.isVisible = true;
        setTimeout(() => {  
            this.isVisible = false;
          }, 900);
    }

}
