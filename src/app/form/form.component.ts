import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  Question = '';
  Answer = '';
  valid = true;

  @Output() jokeCreation = new EventEmitter();

  createJoke(): void {
    if (this.Question === '' || this.Answer === '') {
      this.valid = false;
      return;
    }
    this.jokeCreation.emit({
      question: this.Question,
      answer: this.Answer,
      hidden: true
    });
    this.Question = '';
    this.Answer = '';
    this.valid = true;
  }

}
