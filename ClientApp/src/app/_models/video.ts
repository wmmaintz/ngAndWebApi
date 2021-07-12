export class Video {
  id: number;
  filename: string;
  title: string;
  sDescript: string;
  lDescript: string;
  videoHref: string;
  imageHref: string;
  thumbnail: string;
  dateCreated: string;
  dateCaptured: string;
  fileSize: number;
  categories: string[];
  tags: string[];
  carousels: number[];


  constructor(init?:Partial<Video>) {
    this.id=0;
    this.filename="";
    this.title="";
    this.sDescript="";
    this.lDescript="";
    this.dateCreated="";
    this.dateCaptured="";
    this.fileSize=0;
    this.videoHref = "";
    this.imageHref = "";
    this.thumbnail = "";
    this.categories = [];
    this.tags = [];
    this.carousels = [];
    Object.assign(this, init);
  }
}