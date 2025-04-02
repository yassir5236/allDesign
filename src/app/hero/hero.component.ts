import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  images: string[] = [
    'assets/pexels-emrecan-2079246.jpg',
    '/assets/pexels-wilcle-nunes-38713774-26987997.jpg',

  'assets/pexels-home-decor-interiors-634144-1827054.jpg',
 
  ];
  
  currentIndex: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.detectChanges(); 
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.cdr.detectChanges(); 
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.cdr.detectChanges(); 
  }



  faqs = [
    {
        question: "Comment puis-je demander un devis pour mon projet ?",
        answer: "Vous pouvez nous contacter par téléphone, e-mail ou via le formulaire sur notre site web. Nous organiserons une consultation gratuite pour évaluer vos besoins et vous fournir un devis détaillé.",
        isOpen: true
    },
    {
        question: "Que dois-je attendre de notre première rencontre ?",
        answer: "Lors de notre première rencontre, nous discuterons de vos idées, visiterons l’espace à aménager si possible, et définirons ensemble vos attentes. Nous vous proposerons ensuite des solutions adaptées à votre style et budget.",
        isOpen: false
    },
    {
        question: "Quels sont vos horaires d’ouverture ?",
        answer: "Nous sommes disponibles du lundi au vendredi de 9h00 à 18h00, et le samedi de 10h00 à 14h00. Nous sommes fermés le dimanche et les jours fériés.",
        isOpen: false
    },
    {
        question: "Fournissez-vous les matériaux pour les projets ?",
        answer: "Oui, nous collaborons avec des fournisseurs de confiance pour vous proposer des matériaux de qualité. Vous pouvez également apporter vos propres matériaux si vous le souhaitez.",
        isOpen: false
    },
    {
        question: "Combien de temps prend un projet d’aménagement ?",
        answer: "La durée dépend de l’ampleur du projet. Une simple peinture peut prendre quelques jours, tandis qu’une rénovation complète peut nécessiter plusieurs semaines. Nous vous donnerons une estimation précise après évaluation.",
        isOpen: false
    },
    {
        question: "Quelle est votre politique d’annulation ?",
        answer: "Nous demandons un préavis de 48 heures pour toute annulation. En cas d’annulation tardive, des frais équivalant à 30 % du devis initial peuvent être appliqués.",
        isOpen: false
    },
    {
        question: "Proposez-vous des services de suivi après projet ?",
        answer: "Oui, nous offrons un suivi post-projet pour nous assurer de votre satisfaction. Nous restons disponibles pour toute retouche ou question après la fin des travaux.",
        isOpen: false
    }
];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}