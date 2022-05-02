import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private firestore: Firestore
  ) { }

  getNews() {
    const newsRef =  collection(this.firestore,'news');
    return collectionData(newsRef);
  }
}
