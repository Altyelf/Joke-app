import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent{
  @Input()
  jokes: {
    question: string;
    answer: string;
    hidden: boolean;
  }[] = [];
  @Output() jokeDeletion = new EventEmitter();

  deleteJoke(i: number): void {
    this.jokeDeletion.emit(i);
  }

}
