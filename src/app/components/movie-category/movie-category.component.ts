import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
    selector: 'app-movie-category',
    standalone: true,
    template: `
   <div class="mb-12">
  <h4 class="text-white font-bold mb-4 text-xl">{{ title }}</h4>
  <div class="flex gap-4">
    @for(movie of movieList;track movie){
        <app-movie-card [movie]="movie"></app-movie-card>
    }@empty {
        <p>Loading....</p>
    }
  </div>
</div>
  `,
    styleUrl: './movie-category.component.scss',
    imports: [MovieCardComponent]
})
export class MovieCategoryComponent {
  @Input() title="";
  @Input() movieList:Movie[]=[];
}
