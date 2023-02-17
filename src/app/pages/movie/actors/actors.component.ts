import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { resolution } from 'src/app/global/functions/resolution';
import { cast } from 'src/app/interfaces/actor';
import { Backdrop } from 'src/app/interfaces/images';
import { ActorsService } from 'src/app/services/actors.service';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ActorsComponent implements OnInit {
  actors: cast[];
  posters: Backdrop[];
  color: string = 'black';

  pixel = new resolution();

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      1500: { slidesPerView: 6 },
      900: { slidesPerView: 4 },
    },
  };

  banner: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: { 900: { slidesPerView: 2 } },
  };

  @Input() id: number;

  constructor(private credits: ActorsService) {}

  ngOnInit(): void {
    this.credits.Actors(this.id).subscribe({
      next: (result) => {
        this.actors = result.cast;
      },
      error: () => {},
    });

    this.credits.Posters(this.id).subscribe({
      next: (result) => {
        this.posters = result.backdrops;
      },
      error: () => {},
    });
  }
}
