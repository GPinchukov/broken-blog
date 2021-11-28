import {Component, OnInit} from '@angular/core';
import {PostsService} from './shared/posts.service';
import {DatabaseService} from './shared/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( public posy: PostsService,
               public daty: DatabaseService) {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('TheData')) {
      localStorage.setItem('TheData', JSON.stringify(this.daty.Data));
    }
  }

}
