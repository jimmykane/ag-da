import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
        { id: 1, slug: 'slug-1', title: 'Title 1', author: 'Author', description: 'This is a description.', im: "/assets/scream.jpg" },
        { id: 2, slug: 'slug-2', title: 'Title 2', author: 'Author',  description: 'This is a description.', im: '/assets/scream.jpg'  },
        { id: 3, slug: 'slug-3', title: 'Title 3', author: 'Author',  description: 'This is a description.', im: '/assets/scream.jpg'  },
        { id: 4, slug: 'slug-4', title: 'Title 3', author: 'Author',  description: 'This is a description.', im: '/assets/scream.jpg'  },
    ];
    return {posts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}