import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent {
  @Input() num: number = 1;
  @Input() x: number = 0;
  @Input() y: number = 0;
}
