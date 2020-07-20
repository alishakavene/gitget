import { Component, OnInit } from '@angular/core';
import { GitgetService } from '../gitget.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor(private gitgetservice: GitgetService) {
    
}

  findProfile(){
    this.gitgetservice.updateProfile(this.username);
    this.gitgetservice.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;

    });

    this.gitgetservice.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
  })

  }

  ngOnInit(): void {
  }

}
