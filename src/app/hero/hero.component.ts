// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero',
//   imports: [],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.css'
// })
// export class HeroComponent {

// }
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  images: string[] = [
    '/assets/pexels-pixabay-271795.jpg',
    '/assets/pexels-subham-majumder-1992868-3614082.jpg',
    '/assets/pexels-wilcle-nunes-38713774-26987997.jpg'
  ];
  
  currentIndex: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  // Aller à l'image suivante
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.detectChanges(); // Force la mise à jour de la vue
  }

  // Aller à l'image précédente
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.cdr.detectChanges(); // Force la mise à jour de la vue
  }

  // Aller à une image spécifique
  goToSlide(index: number): void {
    this.currentIndex = index;
    this.cdr.detectChanges(); // Force la mise à jour de la vue
  }
}