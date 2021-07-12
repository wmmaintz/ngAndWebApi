import { Carousel } from './carousel';
let today: string = Date.now().toString();

export class Photo {
 
  id: number;
  title: string;
  sdescript: string;
  ldescript: string;
  dateCreated: string;
  uploadDate: string;
  fileSize: number;
  hOffset: number;
  vOffset: number;
  href: string;
  thumbnail: string;
  tags: string[];
  carousels: Carousel[];

  constructor(init?:Partial<Photo>) {
    this.id=0;
    this.title="";
    this.sdescript="Short description";
    this.ldescript="Long description";
    this.dateCreated=today;
    this.uploadDate=today;
    this.fileSize=0;
    this.hOffset=0;
    this.vOffset=0;
    this.href = "";
    this.thumbnail = "";
    this.tags = [];
    this.carousels = [];
    Object.assign(this, init);
  }

}