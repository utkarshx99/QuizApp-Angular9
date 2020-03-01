import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      questionValue : ['', Validators.required ],
      choice1: ['', Validators.required ],
      choice2: ['', Validators.required],
      choice3: ['', Validators.required],
      choice4: ['', Validators.required],
   });
  }
  addQuestion(questionValue, choice1, choice2, choice3, choice4) {
     const dataObj = {
      questionValue: questionValue,
      choice1: choice1,
      choice2: choice2,
      choice3: choice3,
      choice4: choice4
    };
    this.shareservice.addQuestion(dataObj);
  }

  ngOnInit(): void {
  }

}
