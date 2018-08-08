import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Idea} from '../idea'

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.css']
})
export class IdeaDetailsComponent implements OnInit {

  @Input() idea:Idea;
  @Output() isComplete= new EventEmitter<boolean>();

  ideaDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
