import { Component, OnInit } from '@angular/core';
import { ImagesService } from '@app/_services';
import { Image, Carousel } from '@app/_models';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent {
  image: Image;
  images: Image[] = [];
  selectedImage: any;

  constructor(private imagesService: ImagesService) {
    this.images = this.getImages();
  }

  public selectImage(e: any) {
    this.selectedImage = e;
  }

  public getImages(): Image[] {
    this.images = this.imagesService.getImages();
    // console.log('Number of images loaded from service is [' + this.images.length + ']');
    return this.images;
  }

  public getImage(id: number) {
    var msg = 'Getting image id[' + id + ']';
    alert(msg);
    this.image = this.imagesService.getImage(id);
    if (this.image != null) { return this.image; }
    return null;
  }
}
