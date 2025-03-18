import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { slideInAnimation } from './animation/route-animations';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation],

})
export class AppComponent {
  title = 'all-Design';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation']; 
  }
}

