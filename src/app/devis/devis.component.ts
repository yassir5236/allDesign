import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-devis',
  imports: [ReactiveFormsModule,CommonModule,MapComponent],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {


  
  openGoogleMaps(): void {
    const lat = 33.5897;  // Example latitude
    const lng = -7.6036;  // Example longitude
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  }
}
