import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums = [
    { id: 1, title: 'Album 1', cover: 'assets/albums/DSC_0145.JPG' },
    { id: 2, title: 'Album 2', cover: 'assets/albums/DSC_0153.JPG' },
    { id: 3, title: 'Album 3', cover: 'assets/albums/DSC_3673.JPG' },
    { id: 1, title: 'Album 1', cover: 'assets/albums/DSC_3677.JPG' },
    { id: 2, title: 'Album 2', cover: 'assets/albums/DSC_5649.JPG' },
    { id: 3, title: 'Album 3', cover: 'assets/albums/edited 1st yr.jpg' },
    { id: 1, title: 'Album 1', cover: 'assets/albums/edited 2nd yr.jpg' },
    { id: 2, title: 'Album 2', cover: 'assets/albums/gallery-8.jpg' },
    { id: 3, title: 'Album 3', cover: 'assets/albums/IMG_20221015_055912_1.jpg' },
    { id: 1, title: 'Album 1', cover: 'assets/albums/IMG_20230815_081910.jpg' },
    { id: 2, title: 'Album 2', cover: 'assets/albums/IMG_20230828_161308.jpg' },
    { id: 3, title: 'Album 3', cover: 'assets/albums/IMG-20200314-WA0000.jpg'}
  ];
}
