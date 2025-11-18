import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDTO } from 'src/app/Post/models/post.dto';
import { FormatDatePipe } from '../../Pipes/format-date.pipe';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [PostCardComponent, BrowserAnimationsModule, FormatDatePipe, MatProgressSpinnerModule, MatCardModule, MatTableModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements OnInit {
  @Input() item!: PostDTO;
  @Input() showButtons: boolean = false;
  @Output() like: EventEmitter<string> = new EventEmitter();
  @Output() dislike: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  
  onLike(): void {
    this.like.emit(this.item.postId);
  }

  onDislike(): void {
    this.dislike.emit(this.item.postId);
  }
}
