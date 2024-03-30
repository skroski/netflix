import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
import { MovieCategoryComponent } from "../../components/movie-category/movie-category.component";
import { tmdbConfig } from '../../constants/config';

@Component({
  selector: 'app-browse',
  standalone: true,
  template: `
    <div class="browse-page">
  <app-header></app-header>
  <div class="banner">
    @if(bannerMovie && bannerMovie.videoKey){
    <iframe
      class="banner-video"
      [src]="
        domSanitise.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/' + bannerMovie.videoKey + '?autoplay=1&mute=1&showinfo=0&controls=0'
        )
      "
      frameborder="0"
    ></iframe>
    }@else{
    <img
      class="banner-img"
      [src]="tmdbConfig.imagePath + bannerMovie.poster_path"
      alt="banner image"
    />
    }
    <div class="banner-movie-info">
      <h4 class="banner-heading">{{ bannerMovie.original_title }}</h4>
      <p class="banner-description">{{ bannerMovie.overview }}</p>
      <div class="banner-action">
        <button type="button" class="play-btn">Play</button>
        <button type="button" class="info-btn">More Info</button>
      </div>
    </div>
  </div>
  <div class="movie-categories px-16 relative z-50 -mt-40">
    <app-movie-category
      [title]="'Popular'"
      [movieList]="popularMovies"
    ></app-movie-category>
    <app-movie-category
      [title]="'Top Rated'"
      [movieList]="topRatedMovies"
    ></app-movie-category>
    <app-movie-category
      [title]="'Upcomming'"
      [movieList]="upcommingMovies"
    ></app-movie-category>
    <app-movie-category
      [title]="'Now Playing'"
      [movieList]="nowPlayingMovies"
    ></app-movie-category>
  </div>
</div>
  `,
  styleUrl: './browse.component.scss',
  imports: [HeaderComponent, MovieCardComponent, MovieCategoryComponent]
})
export class BrowseComponent {
  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcommingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  bannerMovie!: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise = inject(DomSanitizer);

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovies = result.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService
        .getMovieVideos(this.bannerMovie.id)
        .subscribe((res: any) => {
          this.bannerMovie.videoKey = res.results.find(
            (x: any) => (x.site = 'YouTube')
          ).key;
          console.log(this.bannerMovie)
        });
    });
    this.movieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovies = result.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovies = result.results;
    });
  }
}
