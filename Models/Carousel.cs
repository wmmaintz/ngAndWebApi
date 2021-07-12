using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngAndWebApi.Models
{
    public enum CarouselPage
    {
        Home = 0,
        Photo = 1,
        Video = 2,
        Image = 3
    }

    public class Carousel
    {
        public int Id { get; set; }
        public CarouselPage Num { get; set; }
        public Boolean ShowTnD { get; set; }
        public string DescSorL { get; set; }
        public int SlideInterval { get; set; }

    }
}
