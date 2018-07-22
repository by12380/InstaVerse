import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as bootbox from 'bootbox';
import * as $ from 'jquery';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('dropdowntoggle') dropdowntoggle: ElementRef;
  
  private status: {isopen: boolean} = {isopen: false};

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.status.isopen == true) {
      $(this.dropdowntoggle.nativeElement).removeClass("open");
    }
    else if (this.status.isopen == false)
    {
      $(this.dropdowntoggle.nativeElement).addClass("open");
    }
    this.status.isopen = !this.status.isopen;
  }

  public onMouseover(){
    if(this.status.isopen == false){
      this.toggle();
    }
  }

  public onMouseleave(){
    if(this.status.isopen == true){
      this.toggle();
    }
  }

  public openVerseRef() {
    var content =
    `<div class="modal-font-style">
    <strong><p>One Verse</p></strong>
    <p>2 Corinthians 1:1 or 2 Cor 1:1</p>
    <strong><p>Multiple Verses</p></strong>
    <p>John 1:1-5 or John 1:1,3-5,7 (with commas)</p>
    <strong><p>Multiple Verses From Different Chapters</p></strong>
    <p>Matt 1:1; 2:5; (with semi-colons)</p>
    <strong><p>Multiple Verses From Different Books</p></strong>
    <p>Gen 1:26; Ezek 1:26; John 3:16,18-20;</p>
    <strong><p>One Chapter</p></strong>
    <p>Rev 1</p>
    <br>
    <strong><p>*No Multiple Chapters or Books</p></strong>
    </div>`;

    bootbox.dialog({
      title: ' ',
      message: content,
      size: 'small'
    });
  }

  public openAbout() {
    var content =
    `<div class="modal-font-style">
      <p>All verses are provided by http://api.lsm.org </p>
      <br>
      <strong><p>*All rights belong to Living Stream Ministry*</p></strong>
    </div>`;

    bootbox.dialog({
      title: ' ',
      message: content,
      size: 'small'
    });
  }

}
