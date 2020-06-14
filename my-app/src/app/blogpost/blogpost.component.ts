import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../mock-posts';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  posts = POSTS;
  selectedPost: Post;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }


}
