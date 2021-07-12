export enum CarouselPage {
  Home = 0,
  Photo = 1,
  Video = 2
}

export class Carousel {
  id: number;
  num: CarouselPage;
  showTnD: boolean;
  descSorL: string;
  slideInterval: number;

  constructor(init?:Partial<Carousel>) {
    this.id=0;
    this.num=0; // number of carousel (see carouselPage enum above)
    this.showTnD=true; // Show title AND description (true) or not (just title=false)
    this.descSorL="S"; // or "L" for displaying short or long description
    this.slideInterval=0; // number of milliseconds to display this image on this carousel
    Object.assign(this, init);
  }
}