import { Component, OnInit } from '@angular/core';
import { Citation } from '../citation'
import { Article } from '../article'

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})
export class CitationsComponent implements OnInit {

  article: Article = {
    doi: '10.1162/neco.1997.9.1.1',
    title: 'Flat Minima',
    authors: ['Sepp Hochreiter','Jurgen Schmidhuber'],
    year: 1997,
    month: 'Jan',
    publisher: 'MIT Press - Journals',
    volume: 9,
    number: 1,
    pages: [1,42],
    journal: 'Neural Computation'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
