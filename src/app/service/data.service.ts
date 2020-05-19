import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostClub } from '../add-club/add-club.component';

export class Club{
  clubId: string
  name: string
  country: string
  imagePath: string
  constructor(
  clubId: string,
  name: string,
  country: string,
  imagePath: string
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:5000/club/';

  constructor(
    private http: HttpClient) {
  }
  getAllClubs(): Observable<Club[]> {

    var val = this.http.get<Club[]>(this.url + 'all');
    return val;

  }
  addClub(club:PostClub) {

    var val = this.http.post<Club>(this.url, club);
    
    return val;
  }
  getClubById(ClubId:string): Observable<Club> {

    var path = this.url+ClubId;
    var val = this.http.get<Club>(path);
    return val;

  }
  updateClubById(club:Club) {

    var val = this.http.put<Club>(this.url, club);
    return val;
  }
  deleteByClubId(ClubId:string){

    var path = this.url+'delete/'+ClubId;
    var val = this.http.delete<Club>(path);
    return val;
  }
  

}
