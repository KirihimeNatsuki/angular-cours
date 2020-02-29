import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'mainComp',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private router: Router) {}

  goProfil() {
    this.router.navigate(['profil']);
  }

  goBlog() {
    this.router.navigate(['blog']);
  }

  ngOnInit() {
  }

}