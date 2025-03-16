import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,WhatsappButtonComponent,ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lilabatihss';
}
