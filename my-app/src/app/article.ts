import { Citation } from './citation';

export interface Article extends Citation {
    year: number;
    month: string;
    publisher:string;
    volume: number;
    number: number;
    pages: number[],
    journal: string
  }