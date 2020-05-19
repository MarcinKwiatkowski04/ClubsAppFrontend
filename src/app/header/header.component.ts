import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router) { }

    goToTable(){
        this.router.navigate(['table'])
    }
    goToWindows(){
      this.router.navigate(['windows'])
  }

  ngOnInit(): void {
  }

}
