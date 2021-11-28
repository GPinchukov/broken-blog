 import {Injectable} from '@angular/core';
 import {HttpClient} from '@angular/common/http';
 import { Post} from './interfaces';
 import {DatabaseService} from './database.service';


 @Injectable({providedIn: 'root'})
export class PostsService {
     NewObj: Post = {author: '', date: undefined, id: '', text: '', title: ''};

  constructor(public data: DatabaseService) {}

  create(post: Post)  {
      this.NewObj = JSON.parse(localStorage.getItem('TheData'));
      this.NewObj[post.id] = post;
      localStorage.setItem('TheData', JSON.stringify(this.NewObj));
  }

  getAll() {
      console.log(JSON.parse(localStorage.getItem('TheData')));
      if (localStorage.getItem('TheData')){
          return Object.values( JSON.parse(localStorage.getItem('TheData')));
      }
      return null;
  }

  getById(id: string) {
      return JSON.parse(localStorage.getItem('TheData'))[id];
  }

  remove(id: string) {
      this.NewObj = JSON.parse(localStorage.getItem('TheData'));
      delete this.NewObj[id];
      localStorage.setItem('TheData', JSON.stringify(this.NewObj));
      console.log(JSON.parse(localStorage.getItem('TheData')));
  }

  update(post: Post) {
      this.NewObj = JSON.parse(localStorage.getItem('TheData'));
      this.NewObj[post.id] = post;
      localStorage.setItem('TheData', JSON.stringify(this.NewObj));
  }
}
