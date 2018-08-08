import { Component, OnInit } from '@angular/core';
import {Idea} from '../idea'
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  ideas = [
      new Idea(1, 'Feed birds', 'Find a new spot to feed them'),
    ]

    addNewidea(idea) {
    let ideaLength = this.ideas.length;
    idea.id = ideaLength+1;
    idea.completeDate = new Date(idea.completeDate)
    this.ideas.push(idea)
}

    deleteIdea(isComplete, index) {
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.ideas[index].name}`)

        if (toDelete) { this.ideas.splice(index, 1) }
      }
    }
    toogleDetails(index) {
      this.ideas[index].showDescription = !this.ideas[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
