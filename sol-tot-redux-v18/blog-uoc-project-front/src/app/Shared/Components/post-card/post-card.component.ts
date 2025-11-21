import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDTO } from 'src/app/Post/models/post.dto';
import { FormatDatePipe } from '../../Pipes/format-date.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [BrowserAnimationsModule, FormatDatePipe, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements OnInit {
  @Input() item!: PostDTO;
  @Input() showButtons: boolean = false;
  @Output() like: EventEmitter<string> = new EventEmitter();
  @Output() dislike: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onLike(): void {
    this.like.emit(this.item.postId);
  }

  onDislike(): void {
    this.dislike.emit(this.item.postId);
  }
}
