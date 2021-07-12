import { Carousel } from './carousel';

export enum ImageType {
  Image = 'Image',
  Photo = 'Photo',
  Video = "Video"
}

export class Image {  id: number;
  type: ImageType;
  filename: string;
  title: string;
  sdescript: string;
  ldescript: string;
  dateTaken: string;
  dateAdded: string;
  fileSize: number;
  href: string;
  videoHref: string;
  thumbnail: string;
  hOffset: number;
  vOffset: number;
  categories: string[];
  tags: string[];
  carousels: Carousel[];

  /*
  constructor(
    public id: number,
    public type: ImageType,
    public filename: string,
    public title: string,
    public sdescript: string,
    public ldescript: string,
    public dateTaken: string,
    public dateAdded: string,
    public fileSize: number,
    public href: string,
    public videoHref: string,
    public thumbnail: string,
    public hOffset: number,
    public vOffset: number,
    public category: string,
    public tags: string[],
    public carousels: Carousel[],
  ) { }
  */
  
  constructor(init?: Partial<Image>) {
    let today: string = new Date().toDateString();

    this.id = 0;
    this.type = ImageType.Image;
    this.filename = "";
    this.title = "";
    this.sdescript="";
    this.ldescript="";
    this.dateTaken=today;
    this.dateAdded=today;
    this.fileSize=0;
    this.href = "";
    this.videoHref = "";
    this.thumbnail = "";
    this.hOffset=0;
    this.vOffset=0;
    this.categories = [];
    this.tags = [];
    this.carousels = [];
    Object.assign(this, init);
  }

}
