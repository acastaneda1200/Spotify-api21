import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    
  }

  getNewReleases(){
    const token = "BQAn7IN-v8gFxxCIWYOj1sc-VB9u-gmUG6fxZc8JvPYDnjEsUE3Y7LWl27FSix-3lum-yEqpMovnH08eLbI";
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
  
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  }
}
