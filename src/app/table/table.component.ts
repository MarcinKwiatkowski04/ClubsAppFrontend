import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Club } from '../service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  clubs:Club[]
  id: string
  constructor( private service:DataService,
    private route:ActivatedRoute,
    private router:Router) {   
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getAllClubs().subscribe(data=>{this.clubs=data 
      console.log(data)} , error => {console.log("error")})    
  }
  deleteClub(id)
  {
    this.service.deleteByClubId(id).subscribe (response => {  this.ngOnInit();}  )
  }
  addClub()
  {
    console.log("x")
    this.router.navigate(['addclub'])
  }
  updateClub(id)
  {
    this.router.navigate(['update',id])
  }
}
