import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Idea} from '../idea';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  newIdea=new Idea(0,"","",new Date());

      @Output() addIdea=new EventEmitter<Idea>();

      submitIdea(){
        this.addIdea.emit(this.newIdea);
      }

  constructor() { }

  ngOnInit() {
  }

}
