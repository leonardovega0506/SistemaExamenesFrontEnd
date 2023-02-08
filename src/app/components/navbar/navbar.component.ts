import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  user:any = null;

  constructor() { }

  ngOnInit(): void {
    
  }
  public logout(){
    window.location.reload();
  }
}
