import { Component, OnInit } from '@angular/core';
import * as bootbox from 'bootbox';

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

  public openFootnote() {
    var content =
    `<div class="modal-font-style">
      <p>Footnotes are viewed via links redirected back to their source locations from http://online.recoveryversion.bible/ </p>
      <br>
      <strong><p>*Footnotes are only available for the New Testament Bible</p></strong>
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
      <p>All requested verses are parsed from the Recovery Version Bible from http://online.recoveryversion.bible/. </p>
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
