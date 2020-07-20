import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitgetService {

  private username:string;
  private clientid = '';
  private clientsecret = '73570492d9410cbb61c8a2ae02a5f4d5b0f0ea07';


  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'alishakavene';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +"&client_secret=" + this.clientsecret )

  }

  getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid +"&client_secret=" + this.clientsecret )
       
  }
  updateProfile(username:string){
    this.username = username;

  }
  
}
