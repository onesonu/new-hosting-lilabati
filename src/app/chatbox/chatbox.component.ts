import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  imports: [FormsModule,CommonModule,RouterModule],
  standalone:true,
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  userInput: string = '';
  messages: string[] = [
    "Hello! How can I assist you today?",
  ];

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(`You: ${this.userInput}`);
      this.getChatbotResponse(this.userInput);
      this.userInput = '';
    }
  }

  // Simulate dynamic response (you can later fetch data from DB here)
  getChatbotResponse(userMessage: string) {
    let reply = "I'm sorry, I don't understand that.";
    
    if (userMessage.toLowerCase().includes('services')) {
      reply = "We offer Web Development, Digital Marketing, and SEO services.";
    } else if (userMessage.toLowerCase().includes('hours')) {
      reply = "Our office hours are from 9 AM to 6 PM, Monday to Friday.";
    }

    this.messages.push(`Bot: ${reply}`);
  }

  closeChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox) {
      chatbox.style.display = 'none';
    }
  }
}