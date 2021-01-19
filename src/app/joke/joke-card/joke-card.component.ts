import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  @Input()
  joke!: {
    question: string;
    answer: string;
    hidden: boolean;
  };
  @Output() jokeDeletion = new EventEmitter();

  deleteJoke(): void {
    this.jokeDeletion.emit();
  }
}
