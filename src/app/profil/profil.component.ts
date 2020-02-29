import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

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