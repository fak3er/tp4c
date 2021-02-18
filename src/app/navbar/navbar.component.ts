import { Component, OnInit } from '@angular/core';
//decorateur
@Component({
  selector: 'app-navbar',//app-component permet d'utiliser la balise app-navbar
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
