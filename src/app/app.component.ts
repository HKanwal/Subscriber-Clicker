import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BubbleComponent } from './bubble/bubble.component';

class Item {
  name: string;
  cost: number;
  cps: number;

  constructor(name: string, cost: number, cps: number) {
    this.name = name;
    this.cost = cost;
    this.cps = cps;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Subscribe-Clicker';
  items: Item[] = [];
  modifier: number = 0;
  score = 0;
  @ViewChild("bubbles", { read: ViewContainerRef }) bubbles?: ViewContainerRef;

  constructor() {
    this.items.push(new Item("Russian Bots", 25, 1));
    this.items.push(new Item("Facebook Ads", 100, 4));
    this.items.push(new Item("Clickbait Thumbnails", 1000, 40));
    this.items.push(new Item("Elon Musk Tweet", 1000000, 40000));
    this.gameLoop();
  }

  gameLoop() {
    this.increaseScore(this.modifier);
    setTimeout(() => { this.gameLoop(); }, 1000);
  }

  increaseScore(x: number) {
    this.score += x;
  }

  incrementScore() {
    this.increaseScore(1);
  }

  decreaseScore(x: number) {
    this.score -= x;
  }

  buyItem(item: Item) {
    if (this.score >= item.cost) {
      this.decreaseScore(item.cost);
      this.modifier += item.cps;
    }
  }

  handleButtonClick(e: MouseEvent) {
    this.incrementScore();
    if (this.bubbles) {
      let bubble = this.bubbles.createComponent(BubbleComponent);
      bubble.instance.x = e.clientX;
      bubble.instance.y = e.clientY - 20;
      setTimeout(() => {
        bubble.destroy();
      }, 2000);
    }
  }
}
