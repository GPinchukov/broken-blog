import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup;
  post: any;
  id: any;
  submitted = false;

  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private alert: AlertService,
    public auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.post = this.postsService.getById(this.id);
    this.form = new FormGroup({
        title: new FormControl(this.post.title, Validators.required),
        text: new FormControl(this.post.text, Validators.required)
  });
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.postsService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    });
    this.submitted = false;
    this.alert.success('Пост был обновлен');
  }
}
