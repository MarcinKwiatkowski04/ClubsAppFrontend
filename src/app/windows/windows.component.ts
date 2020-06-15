import { Component, OnInit } from '@angular/core';
import {DataService, Club} from '../service/data.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit {

  clubs:Club[]
  id: string
  constructor( private service:DataService,
    private route:ActivatedRoute,
    private router:Router) {
   
   }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getAllClubs().subscribe(data=>{this.clubs=data}, error => {console.log("error")})
    
  }
  deleteClub(id)
  {
    this.service.deleteByClubId(id).subscribe (response => {  this.ngOnInit();}  )
  }
  addClub()
  {
    this.router.navigate(['addclub'])

  }
  updateClub(id)
  {
    this.router.navigate(['update',id])

  }


}
