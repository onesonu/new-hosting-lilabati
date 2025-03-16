import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, RouterModule],
  standalone:true,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  
  isChatboxOpen = false; // ✅ Define this property

  toggleChatbox() {
    alert('this feature coming soon 👍');
    this.isChatboxOpen = !this.isChatboxOpen; // ✅ Toggle chatbox visibility
  }

}
