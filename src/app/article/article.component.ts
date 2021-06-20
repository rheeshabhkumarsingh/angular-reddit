import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  vote:number;
  title:string;
  link:string;
  

  constructor(title:string, link:string) {
    this.title = title;
    this.link = link;
    this.vote = 0;
   }

  ngOnInit(): void {
  }


  uoVote()
  {
    this.vote++;
  }
  
  downVote()
  {
    if(this.vote>0)
    {
      this.vote--;
    }
  }


}
