import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  template: `
   @if(movie){
    <div class="movie-card">
      <img
        [src]="tmdbConfig.imagePath + movie.poster_path"
        alt="movie image"
        class="cursor:pointer"
      />
      <h4 class="title">{{ movie.original_title }}</h4>
    </div>
    }
  `,
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie! :Movie;
  tmdbConfig = tmdbConfig;
}
