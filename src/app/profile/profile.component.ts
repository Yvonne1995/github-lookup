import { Component, OnInit,Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = [];
  repos: any = [];
  username: string;
  constructor(private _user: ProfileService) { }
  ngOnInit() {
    this._user.userProfile().subscribe(profile =>{
      this.profile=false;
    });
  }

  findProfile() {
    this._user.updateProfile(this.username);
    this._user.userProfile()
      .subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    this._user.userRepos()
      .subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      })
  }


}
