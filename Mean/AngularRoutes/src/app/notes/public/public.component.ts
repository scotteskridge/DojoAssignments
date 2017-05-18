import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    console.log('Snapshot: ', id)

    this.route.params
      .subscribe((params) => {
        console.log('Subscription: ', params.id)
      })
  }

  onAnEvent(){

  }

}
