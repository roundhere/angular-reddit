import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Article } from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article;
  @Input() vote;
  elem: any;
  exec:boolean = false;
  data = { isSelected: false };

  @Output() public outVote: EventEmitter<any> = new EventEmitter();

   
   

  constructor() {

   }
  voteUp():boolean{
     this.outVote.emit(this.article.vote);
    this.article.voteUp();
    //console.log(this.article.vote);
    console.log()
    return false;
  }
  voteDown(): boolean{
     this.outVote.emit(this.article.vote);
    this.article.voteDown();
    return false;
  }



  ngOnInit() {
  }

}

/* this.articles = [
      new Article(
      "Angula2"
      , "http://angular.io"
      , 10
    )
    ,new Article(
      "Fullstack"
      , "http://fullstack.io"
      , 10
    )
    ,new Article(
      "reddit"
      , "http://reddit.com"
      , 10
    )];
*/