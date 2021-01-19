import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jokes = [
    {
      question: 'Have you heard the joke about butter?',
      answer: 'I better not tell you, it might spread.',
      hidden: true,
    },
    {
      question: 'How do you now that carrots are good for your eyesight?',
      answer: 'Have you ever seen a rabbit wearing glasses.',
      hidden: true,
    },
    {
      question: 'Where do boats go when they are sick?',
      answer: 'The dock',
      hidden: true,
    },
  ];

  addJoke(e: { question: string; answer: string; hidden: boolean }): void {
    this.jokes.push(e);
  }

  deleteJoke(e: number): void {
    this.jokes.splice(e, 1);
  }
}
