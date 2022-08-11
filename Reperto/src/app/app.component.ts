import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chords: any;
  url = 'https://localhost:44357/api/chords/index';

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getData(this.url).subscribe((response) => {
      this.chords = response;
      console.log(this.chords);
    });
  }
}
