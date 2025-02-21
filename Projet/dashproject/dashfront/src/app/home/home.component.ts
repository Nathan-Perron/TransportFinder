import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var AOS: any;
declare var GLightbox: any;
declare var Isotope: any;
declare var Swiper: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    this.loadScript('assets/vendor/glightbox/js/glightbox.min.js', () => {
      this.loadScript('assets/js/main.js');
    });
  }

  loadScript(src: string, callback?: () => void): void {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => callback && callback();
    document.body.appendChild(script);
  }

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({duration: 600, easing: 'ease-in-out', once: true, mirror: false});
    }

    if (typeof GLightbox !== 'undefined') {
      GLightbox({selector: '.glightbox'});
    }

    setTimeout(() => {
      if (typeof Isotope !== 'undefined') {
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
          let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
          let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
          let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

          let initIsotope: typeof Isotope | null = null;

          const container = isotopeItem.querySelector('.isotope-container');
          if (container) {
            imagesLoaded(container, function () {
              initIsotope = new Isotope(container, {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
              });
            });
          }

          isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
            filters.addEventListener('click', function (event) {
              const element = event.currentTarget as HTMLElement;
              const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
              if (activeFilter) {
                activeFilter.classList.remove('filter-active');
              }

              element.classList.add('filter-active');

              if (initIsotope) {
                initIsotope.arrange({
                  filter: element.getAttribute('data-filter') || '*'
                });
              }

              if (typeof AOS !== 'undefined') {
                AOS.init();
              }
            });
          });
        });
      }
    }, 500);

    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
          const configElement = swiperElement.querySelector(".swiper-config");
          if (!configElement) return;

          let config = JSON.parse(configElement.innerHTML.trim());
          new Swiper(swiperElement, config);
        });
      }
    }, 500);
  }
}
