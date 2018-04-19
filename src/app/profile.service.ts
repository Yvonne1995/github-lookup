import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private username: string;
  private apiUrl = environment.apiUrl;
  private accesstoken = environment.access_token;
  constructor(private _http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'Yvonne1995';
  }

  userProfile() {
    return this._http.get(this.apiUrl + this.username + "?access_token=" + this.accesstoken)
      .map(result => result);
  }
  // console.log(userProfile);
  userRepos() {
    return this._http.get(this.apiUrl + this.username + "/repos?access_token=" + this.accesstoken)
      .map(result => result);
  }
  updateProfile(username:string) {
    this.username = username;
  }
}
