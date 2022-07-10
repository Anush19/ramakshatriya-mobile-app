import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploadService {
  location = 'uploads'
  constructor(private angularFireStorage: AngularFireStorage) { }
  async storeImage(imageData: any) {
    try {
      const imageName = this.imageName();
      return new Promise((resolve, reject) => {

        const pictureRef = this.angularFireStorage.ref(this.location + imageName);
        pictureRef.put(imageData).then(function () {
          pictureRef.getDownloadURL().subscribe((url: any) => {
            resolve(url);
          })
        }).catch((err) => {
          reject(err)
        })
      })
    } catch (error) {

    }
  }
  imageName() {
    const time = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 2) + time;
  }
}
