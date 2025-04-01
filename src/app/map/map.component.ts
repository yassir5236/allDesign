import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})


export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    if (this.mapContainer) {
      // Créer la carte et définir le point central
      const map = L.map(this.mapContainer.nativeElement).setView([33.5731, -7.5898], 13); // Exemple : coordonnées de Casablanca

      // Ajouter un fond de carte gratuit (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Ajouter un marqueur à l'emplacement de l'entreprise
      L.marker([33.5731, -7.5898]).addTo(map) // Coordonnées de Casablanca
        .bindPopup('Complexe d\'affaires AllDesign, Rue Mohammed VI, Casablanca')
        .openPopup();
    }
  }
}
