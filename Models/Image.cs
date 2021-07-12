using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngAndWebApi.Models
{
    public enum ImageType
    {
        Image,
        Photo,
        Video
    }

    public class Image
    {
        public int Id { get; set; }
        public ImageType Type { get; set; }
        public string Filename { get; set; }
        public string Title { get; set; }
        public string SDescript { get; set; }
        public string LDescript { get; set; }
        public DateTime ImageDate { get; set; }
        public DateTime DateAdded { get; set; }
        public int FileSize { get; set; }
        public int HOffset { get; set; }
        public int VOffset { get; set; }
        public string Href { get; set; }
        public string VideoHref { get; set; }
        public string Thumbnail { get; set; }
        /*
        public List<string> Categories { get; set; }
        public List<string> Tags { get; set; }
        public virtual List<Carousel> Carousels { get; set; }
        */
    }
}
