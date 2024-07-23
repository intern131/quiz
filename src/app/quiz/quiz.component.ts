import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  title = 'AI Quiz';

  question1: string = 'What is the goal of Artificial Intelligence?';
  question2: string = 'Which of the following is an application of AI in healthcare?';
  question3: string = 'Which of the following algorithms is used for classification tasks in AI?';
  question4: string = 'What does NLP stand for in the context of AI?';
  question5: string = 'Which of the following is a type of neural network?';

  answer1: string = 'B';
  answer2: string = 'C';
  answer3: string = 'C';
  answer4: string = 'B';
  answer5: string = 'C';

  userAnswers = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  };

  reveal: boolean = false;
  score: number | null = null;

  onSubmit() {
    this.calculateScore();
    alert('Your answer has been submitted.');
  }

  revealAnswer() {
    this.reveal = !this.reveal;
  }

  calculateScore() {
    this.score = 0;
    if (this.userAnswers.question1 === this.answer1) this.score++;
    if (this.userAnswers.question2 === this.answer2) this.score++;
    if (this.userAnswers.question3 === this.answer3) this.score++;
    if (this.userAnswers.question4 === this.answer4) this.score++;
    if (this.userAnswers.question5 === this.answer5) this.score++;
  }
}
