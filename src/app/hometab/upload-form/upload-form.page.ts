import { Component, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { finalize, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';
export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.page.html',
  styleUrls: ['./upload-form.page.scss'],
})
export class UploadFormPage{

  @ViewChild(IonModal) modal: IonModal;
  private newsGroup: FormGroup;

  message = 'Upload News';
  name: string;
  isFileUploading: boolean;
  isFileUploaded: boolean;
  imgName: string;
  fileUploadTask: any;
  percentageVal: any;
  trackSnapshot: any;
  UploadedImageURL: any;
  imgSize: any;
  private filesCollection: AngularFirestoreCollection<imgFile>;
  files: any;
  private basePath = '/upload';
  file: File;
  url = '';
  selectedImage: any;
  imgSrc: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private afs: AngularFirestore, private service: NewsService,
    private afStorage: AngularFireStorage) {
    this.newsGroup = this.formBuilder.group({
      headline: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: [''],
      image: new FormControl(null, [Validators.required])
    });
    {
      this.isFileUploading = false;
      this.isFileUploaded = false;
      // Define uploaded files collection
      this.filesCollection = afs.collection<imgFile>('imagesCollection');
      this.files = this.filesCollection.valueChanges();
     
    }
  }
 
  logForm() {
    console.log(this.newsGroup.value)
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  resetForm() {
    this.newsGroup.reset();
    this.newsGroup.setValue({
      headline: "",
      subtitle: "",
      description: "",
      image: ""
    })
  }
  confirm(formvalue) {
    if (this.newsGroup.valid) {
      let filePath = `uploads/${this.selectedImage.name.split('.')[0]}_${new Date().getTime()}`;
      const fileRef = this.afStorage.ref(filePath);
      const snap = this.afStorage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formvalue["image"] = url;
            this.service.addImageDetails(formvalue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    //TODO LATER
  }
  navigateBack() {
    this.router.navigateByUrl('/tabs/hometab/home');
  }

  uploadImage(event: FileList) {
    const file = event.item(0);
    // Image validation
    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!');
      return;
    }
    this.isFileUploading = true;
    this.isFileUploaded = false;
    this.imgName = file.name;
    // Storage path
    const fileStoragePath = `uploads/${new Date().getTime()}_${file.name}`;
    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);
    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);
    // Show uploading progress
    this.percentageVal = this.fileUploadTask.percentageChanges();

    this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
      finalize(() => {
        // Retreive uploaded image storage path
        this.UploadedImageURL = imageRef.getDownloadURL();
        this.UploadedImageURL.subscribe(
          (resp) => {
            this.storeFilesFirebase({
              name: file.name,
              filepath: resp,
              size: this.imgSize,
            });
            this.isFileUploading = false;
            this.isFileUploaded = true;
          },
          (error) => {
            console.log(error);
          }
        );
      }),
      tap((snap) => {
        this.imgSize = snap["totalBytes"];
      })
    );
  }
  storeFilesFirebase(image: imgFile) {
    const fileId = this.afs.createId();
    this.filesCollection
      .doc(fileId)
      .set(image)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleFiles(event) {
    this.file = event.target.files[0];
  }

  //method to upload file at firebase storage
  async uploadFile() {
    if (this.file) {
      const filePath = `${this.basePath}/${this.file.name}`;    //path at which image will be stored in the firebase storage
      const snap = await this.afStorage.upload(filePath, this.file);    //upload task
      this.getUrl(snap);
    } else { alert('Please select an image'); }
  }

  //method to retrieve download url
  private async getUrl(snap) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }


  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any)=>this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.selectedImage = null;
    }
  }
}
