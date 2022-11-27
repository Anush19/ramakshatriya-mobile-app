import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { News } from '../interface/newsInterface';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsInfo: News = {
    title: '',
    subtitle: '',
    altText: '',
    info: '',
    thumbnail: '',
    reference: ''
  };
  imageDetailsList: AngularFireList<any>;
  imageRef: AngularFireObject<unknown>;
  constructor(private firestore: Firestore, private firebase: AngularFireDatabase) { }
  getNews(): Observable<News[]> {
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, { idField: 'id' }) as Observable<News[]>;
  }

  getNewsById(id): Observable<News[]> {
    const docRef = doc(this.firestore, `news/${id}`);
    return docData(docRef) as Observable<News[]>;
  }

  addNews(news: News) {
    const newsref = collection(this.firestore, 'news');
    return addDoc(newsref, news);
  }

  deleteNews(news: News) {
    const docRef = doc(this.firestore, `news/${news.id}`);
    return deleteDoc(docRef);
  }

  updateNews(news: News) {
    const docRef = doc(this.firestore, `news/${news.id}`);
    return updateDoc(docRef, {
      title: news.title,
      subtitle: news.subtitle,
      altText: news.altText,
      info: news.info,
      thumbnail: news.thumbnail
    });
  }

  addImageDetails(imageDetails) {
    this.imageDetailsList.push(imageDetails);
  }

  getImageDetailsList() {
    this.imageDetailsList = this.firebase.list('imageDetails');

  }

  deleteImageDetailsList(id: string) {
    this.imageRef = this.firebase.object('imageDetails/' + id);
    this.imageRef.remove();
  }
}
