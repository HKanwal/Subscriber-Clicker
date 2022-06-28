import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BubbleComponent } from '../bubble/bubble.component';

@Component({
  selector: 'sub-btn',
  templateUrl: './sub-btn.component.html',
  styleUrls: ['./sub-btn.component.css']
})
export class SubBtnComponent {
  audio: HTMLAudioElement | null = null;
  @ViewChild("bubbleContainer", { read: ViewContainerRef }) bubbleContainer?: ViewContainerRef;
  bubbleRefs: ComponentRef<BubbleComponent>[] = [];

  ngOnInit() {
    this.audio = document.querySelector("audio") || null;
  }

  playSound() {
    if (this.audio)
      this.audio.play();
  }

  handleClick(e: MouseEvent) {
    if (this.bubbleContainer) {
      let bubble = this.bubbleContainer.createComponent(BubbleComponent);
      bubble.instance.x = e.offsetX;
      bubble.instance.y = e.offsetY;
      this.bubbleRefs.push(bubble);
      // setTimeout(() => {
      //   bubble.destroy();
      // }, 2000);
    }
    this.playSound();
  }
}
