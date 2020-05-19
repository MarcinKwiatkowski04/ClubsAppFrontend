import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';



export class Image{
  club1:string;
  club2:string;
  club3:string;
  club4:string
  constructor() { 
    this.club1 = 'https://en.atleticodemadrid.com/img/atm_facebook_big.png'
    this.club2 = 'https://brandingmonitor.pl/wp-content/uploads/2015/12/nowe-logo-manchester-city.png'
    this.club3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png'
    this.club4 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/372px-Logo_of_AC_Milan.svg.png'
  }
}
export class PostClub{
  Name:string
  Country:string
  ImagePath:string
  constructor(Name:string, Country:string, ImagePath:string) { 
    this.Name = Name;
    this.Country = Country;
    this.ImagePath = ImagePath;
  }
}

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  Name:string
  Country:string
  ImagePath:string
  constructor(private dataService:DataService,
    private router:Router) {     
  }

  ngOnInit(): void {
  }

  login(){
    var image = new Image();
    console.log("log");
    if (this.ImagePath==='club1')
    {
      this.ImagePath=image.club1;
    }
    else if (this.ImagePath==='club2')
    {
      this.ImagePath=image.club2;
    }
    else if (this.ImagePath==='club3')
    {
      this.ImagePath=image.club3;
    }
    else if (this.ImagePath==='club4')
    {
      this.ImagePath=image.club4;
    }
    var club = new PostClub(this.Name, this.Country, this.ImagePath);
    this.dataService.addClub(club).subscribe(response => {},error => console.log(error))
    this.router.navigate(['table'])
  }
}
