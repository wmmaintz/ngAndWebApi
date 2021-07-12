import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Image } from '@app/_models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  image: Image;
  images: Image[];
  http: HttpClient;
  apiUrl = environment.apiUrl;

  constructor(hc: HttpClient)
  {
    this.http = hc;
    this.getImages();
  }

  public getImages(): Image[] {
    this.http.get<Image[]>(this.apiUrl+ '/images').subscribe(result => {
      this.images = result;
    }, error => console.error(error));
    return this.images;
  }

  public getImage(id: number) {
    if (id == 0) return null;
    this.http.get<Image>(this.apiUrl+ '/images/' + id).subscribe(result => {
      this.image = result;
    }, error => console.error(error));
    return this.image;
  }

  public addImage(id: number, img: Image) {
    if (id == 0) return null;
    if (img == null) return null;

    this.http.post<Image>(this.apiUrl + '/images/' + id, img).subscribe(result => {
      this.image = result;
    }, error => console.error(error));
    return this.image;
  }

  public updateImage(id: number, img: Image) {
    if (id == 0) return null;
    if (img == null) return null;

    this.http.put<Image>(this.apiUrl + '/images/' + id, img).subscribe(result => {
      this.image = result;
    }, error => console.error(error));
    return this.image;
  }

  public deleteImage(id: number) {
    if (id == 0) return null;
    this.http.delete<Image>(this.apiUrl+ '/images/' + id).subscribe(result => {
      this.image = result;
    }, error => console.error(error));
    return this.image;
  }



}
