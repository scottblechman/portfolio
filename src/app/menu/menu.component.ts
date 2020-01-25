import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import { User } from '../github/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public user: User;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
