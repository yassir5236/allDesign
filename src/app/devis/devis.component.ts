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
  faqs = [
    {
      question: 'How can I pay for my appointment?',
      answer: 'Payment is required at the conclusion of your appointment. We accept cash, Visa, MasterCard and EFTPOS. If you have your private health insurance card you can claim your benefit on the spot using our HICAPS facility.',
      isOpen: true
    },
    {
      question: 'What can I expect at my first consultation?',
      answer: 'During your first consultation, we will discuss your health concerns, review your medical history, and conduct any necessary examinations. Our goal is to develop a personalized treatment plan tailored to your specific needs.',
      isOpen: false
    },
    {
      question: 'What are your opening hours?',
      answer: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays and public holidays.',
      isOpen: false
    },
    {
      question: 'Do I need a referral?',
      answer: 'No, you do not need a referral to book an appointment with us. However, if you have been referred by another healthcare provider, please bring any relevant documentation to your appointment.',
      isOpen: false
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance?',
      answer: 'Many private health insurance plans cover our services, but coverage varies depending on your specific plan. We recommend contacting your insurance provider to confirm coverage before your appointment.',
      isOpen: false
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations. Late cancellations or missed appointments may incur a fee equivalent to 50% of the scheduled service.',
      isOpen: false
    },
    {
      question: 'What are the parking and public transport options?',
      answer: 'We have dedicated parking available on-site for clients. We are also conveniently located near public transport, with a bus stop directly outside our building and a train station within a 10-minute walk.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  
  openGoogleMaps(): void {
    const lat = 33.5897;  // Example latitude
    const lng = -7.6036;  // Example longitude
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  }
}
