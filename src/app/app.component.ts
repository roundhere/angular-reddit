import { Component, ContentChildren, QueryList } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  articles:Array<Article>;

  constructor(){
     this.articles = [
      new Article(
      "Angula2"
      , "http://angular.io"
      , 8
    )
    ,new Article(
      "Fullstack"
      , "http://fullstack.io"
      , 2
    )
    ,new Article(
      "reddit"
      , "http://reddit.com"
      , 10
    )];
  }
@ContentChildren(Article) artcls: QueryList<Article>;

   addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     this.articles.push(new Article(title.value, link.value, 0));
     title.value = '';
     link.value = '';
     return false;

  }

update(e: MouseEvent) {
     
    console.log(e);
   
  }
}
