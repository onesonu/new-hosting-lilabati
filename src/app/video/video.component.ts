import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videos: { id: number; title: string; safeUrl: SafeResourceUrl }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const videoUrls = [
      { id: 1, title: ' Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
      { id: 3, title: ' Video 3', url: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
      { id: 1, title: ' Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
      { id: 3, title: ' Video 3', url: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
      { id: 1, title: ' Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
      { id: 3, title: ' Video 3', url: 'https://www.youtube.com/embed/tgbNymZ7vqY' }
    ];

    // Sanitize URLs to bypass Angular security restrictions
    this.videos = videoUrls.map(video => ({
      id: video.id,
      title: video.title,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
    }));
  }
}
