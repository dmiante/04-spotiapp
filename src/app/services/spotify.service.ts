import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo.');
  }

  getNewReleases(){

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQACQPO0L1FSwF65KREB6UteDdZcV8zyCO434P8hWQlS7x3vvPRxYxqaqHnsUlakzK1k2EggvwkDylZYTNE'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers}).pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQACQPO0L1FSwF65KREB6UteDdZcV8zyCO434P8hWQlS7x3vvPRxYxqaqHnsUlakzK1k2EggvwkDylZYTNE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers})
    .pipe( map( data => data['artists'].items));
  }
}
