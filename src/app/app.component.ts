import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle:string;
  newLink:string;
  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean
  {
    console.log(`title: ${title.value}, link:${link.value}`);
    
    return false;
  }
}
