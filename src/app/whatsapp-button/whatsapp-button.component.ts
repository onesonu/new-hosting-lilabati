import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  standalone:true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  whatsappNumber = '9437093678';  // Your WhatsApp number
  message = 'Hiiiiii';

  openWhatsApp() {
      const encodedMessage = encodeURIComponent(this.message);  // Encode the message
      const url = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');
    }

}
