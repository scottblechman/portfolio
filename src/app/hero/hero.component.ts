import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import { User } from '../github/user';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public user: User;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
