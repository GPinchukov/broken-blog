import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  posts: any;
  searchStr = '';

  constructor(
    private postsService: PostsService,
    private alert: AlertService,
    public auth: AuthService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.posts = this.postsService.getAll();
    console.log(this.posts);
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  remove(id: string) {
    this.postsService.remove(id);
    this.posts = this.posts.filter(post => post.id !== id);
    this.alert.warning('Пост был удален');
  }



}
