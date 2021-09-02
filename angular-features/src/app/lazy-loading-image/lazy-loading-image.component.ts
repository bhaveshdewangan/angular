import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loading-image',
  templateUrl: './lazy-loading-image.component.html',
  styleUrls: ['./lazy-loading-image.component.css']
})
export class LazyLoadingImageComponent implements OnInit {

  imageUrls = [
    "https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300",
    "https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300"
  ]

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("readystatechange", function (event) {
      if (document.readyState === 'complete') {
        if ("IntersectionObserver" in window) {
          console.log("%c INTERSECTION OBSERVER AVAILABLE", 'background:brown; color:white');
          this.intersectionObserverAPiBasedImgLazyLoading()
        } else {
          console.log("%c DOM IN READY STATE LOADED", 'background:blue; color:white');
          this.readystatechangeEventBasedImgLazyLoading();
          // this.loadEventBasedImgLazyLoading();
        }
      }
    }.bind(this))
  }

  intersectionObserverAPiBasedImgLazyLoading() {
    const lazyloadImages = document.querySelectorAll(".lazy");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          console.log(`%c IMAGE INTERSECTING ${entry.target.id}`, 'background:red; color:white')
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          imageObserver.unobserve(image)
        }
      })
    })
    lazyloadImages.forEach(image => {
      imageObserver.observe(image)
    })
  }

  readystatechangeEventBasedImgLazyLoading() {
    let lazyLoadImages: any = document.querySelectorAll('img.lazy')
    let lazyLoadThrottleTimeout;

    function lazyLoad() {
      let loadedImageCount = 0;

      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        // console.clear()
        let scrollRight = window.pageXOffset;
        let scrollTop = window.scrollY; // window.pageYOffset

        console.log(`%c WINDOW DIMESNTION INNER HEIGHT ${window.innerHeight} \n SCROLL TOP ${scrollTop}`, 'background:red; color:white')
        lazyLoadImages.forEach((img: HTMLImageElement, index) => {
          console.log(`%c IMG OFFSET TOP ${img.offsetTop} ${img.id} ${img.classList}`, 'background:purple; color:white')
          if (img.classList.contains('lazy')) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.dataset.src = 'loaded';
              img.classList.remove('lazy');
              // console.log(`%c IMG LOADED ${img.id} CLASS LIST ${typeof (img.classList)} `, 'background:green; color:white')
            }
          } else {
            loadedImageCount++;
          }
        })
        if (lazyLoadImages.length === loadedImageCount) {
          console.log(`%c LISTNERS REMOVED `, 'background:skyblue; color:white')
          document.removeEventListener('scroll', lazyLoad)
          window.removeEventListener('resize', lazyLoad)
          window.removeEventListener('orientationchange', lazyLoad)
        }
      }, 50)
    }

    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
  }

  loadEventBasedImgLazyLoading() {
    window.addEventListener('load', (event) => {
      console.log('%cWINDOW fully loaded and parsed', 'background:maroon; color:white');

      const lazyLoadImages = document.querySelectorAll('img.lazy')
      console.log(lazyLoadImages);
      let lazyLoadThrottleTimeout;

      function lazyLoad() {
        if (lazyLoadThrottleTimeout) {
          clearTimeout(lazyLoadThrottleTimeout);
        }

        lazyLoadThrottleTimeout = setTimeout(function () {
          console.clear()
          let scrollRight = window.pageXOffset;
          let scrollTop = window.scrollY // window.pageYOffset
          console.log(`%c WINDOW DIMESNTION INNER HEIGHT ${window.innerHeight} \n SCROLL TOP ${scrollTop}`, 'background:red; color:white')
          lazyLoadImages.forEach((img: HTMLImageElement, index) => {
            console.log(`%c IMG OFFSET TOP ${img.offsetTop} ${img.id} ${img.classList}`, 'background:purple; color:white')

            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');

              console.log(`%c IMG LOADED ${img.id} CLASS LIST ${img.classList}`, 'background:green; color:white')
            }
          })
          if (lazyLoadImages.length === 0) {
            document.removeEventListener('scroll', lazyLoad)
            window.removeEventListener('resize', lazyLoad)
            window.removeEventListener('orientationchange', lazyLoad)
          }
        }, 50)
      }

      document.addEventListener('scroll', lazyLoad)
      window.addEventListener('resize', lazyLoad)
      window.addEventListener('orientationchange', lazyLoad)
    });
  }

}
