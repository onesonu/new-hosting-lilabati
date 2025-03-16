import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from '../album/album.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, AlbumComponent, VideoComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeFilter: string = 'album'; // Default: Show all

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
