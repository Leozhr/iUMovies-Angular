import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      1500: { slidesPerView: 5 },
      900: { slidesPerView: 4 },
    },
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
