import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle:string;
  newLink:string;
  articles:Article[];

  constructor()
  {
    this.articles=[ 
      new Article("Angular", "https://angular.io/", 10),
      new Article("Youtube", "https://www.youtube.com", 11),
      new Article("Google Font", "https://fonts.google.com", 13)
    ];
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean
  {
    this.newTitle= (title.value).toString();
    this.newLink = (link.value).toString();
    this.articles.push(new Article(this.newTitle, this.newLink));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
