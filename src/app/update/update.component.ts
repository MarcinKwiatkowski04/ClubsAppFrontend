import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Club } from '../service/data.service';
import { Image } from '../add-club/add-club.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  ClubId: string;
  Name: string;
  Country: string;
  club:Club;
  constructor(private dataservice:DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.ClubId=this.route.snapshot.params['id'];
    this.dataservice.getClubById(this.ClubId).subscribe(x=>{this.club=x 
      this.Name=x.name
      this.Country=x.country
     }, error=>(console.log("error")))
  }
  update(){
    
  }
  login(){
    this.club.name=this.Name;
    this.club.country=this.Country;
    this.dataservice.updateClubById(this.club).subscribe(Response=>{},error=>(console.log("error")));
    this.redirectTo("table");
  } 
  redirectTo(url:string){
    this.router.navigateByUrl('/' , {skipLocationChange:true}).then(() =>this.router.navigate([url]));
  }
}
