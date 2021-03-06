import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() myarticle:Article;
  

  constructor() {}

  ngOnInit(): void {
  }


  upVote():boolean
  {
    this.myarticle.upVote();
    return false;
  }
  
  downVote():boolean
  {
    if(this.myarticle.votes>0)
    {
      this.myarticle.downVote();
      return false;
    }
    return false;
  }


}
