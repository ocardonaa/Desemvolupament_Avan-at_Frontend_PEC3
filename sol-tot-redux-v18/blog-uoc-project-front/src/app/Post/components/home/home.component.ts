import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SharedService } from 'src/app/Shared/Services/shared.service';
import * as PostsAction from '../../actions';
import { PostDTO } from '../../models/post.dto';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardsFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(300, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {
  posts: PostDTO[];
  showButtons: boolean;

  private userId: string;

  loading$: Observable<boolean>;

  constructor(
    private postService: PostService,
    private sharedService: SharedService,
    private store: Store<AppState>
  ) {
    this.userId = '';
    this.posts = new Array<PostDTO>();
    this.showButtons = false;

    this.store.select('auth').subscribe((auth) => {
      this.showButtons = false;

      if (auth.credentials.user_id) {
        this.userId = auth.credentials.user_id;
      }
      if (auth.credentials.access_token) {
        this.showButtons = true;
      }
    });

    this.store.select('posts').subscribe((posts) => {
      this.posts = posts.posts;
    });

    this.loading$ = this.store.select((state: any) => state.posts.loading);

  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts());
  }

  like(postId: string): void {
    let errorResponse: any;

    this.postService.likePost(postId).subscribe(
      () => {
        this.loadPosts();
      },
      (error: HttpErrorResponse) => {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    );
  }

  dislike(postId: string): void {
    let errorResponse: any;

    this.postService.dislikePost(postId).subscribe(
      () => {
        this.loadPosts();
      },
      (error: HttpErrorResponse) => {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    );
  }
}
