import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user: any = null;
  userRole: string = '';
  isMenuOpen = false;
  menuOpen = false;


  constructor(
    private router: Router,

  ) {}


  ngOnInit(): void {
    // this.authService.isLoggedIn().subscribe((status) => {
    //   this.isLoggedIn = status;

    //   if (status) {
    //     this.userService.getUserProfile().subscribe(data => {
    //       this.userRole = data.role;
    //     });
    //   }
    // });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}


