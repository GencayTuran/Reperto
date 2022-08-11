import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss'],
})
export class ChordComponent implements OnInit {
  chords: any;
  url = 'https://localhost:44357/api/chords/index';

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getData(this.url).subscribe((response) => {
      this.chords = response;
    });
    console.log(this.chords);
  }
}
