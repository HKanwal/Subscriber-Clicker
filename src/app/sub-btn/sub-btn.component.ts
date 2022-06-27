import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sub-btn',
  templateUrl: './sub-btn.component.html',
  styleUrls: ['./sub-btn.component.css']
})
export class SubBtnComponent {
  audio: HTMLAudioElement | null = null;

  ngOnInit() {
    this.audio = document.querySelector("audio") || null;
  }

  playSound() {
    if (this.audio)
      this.audio.play();
  }



  handleClick() {
    this.playSound();
  }
}
