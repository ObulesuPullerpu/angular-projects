import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-conversation-card',
  imports: [
    CommonModule,
    MatCardModule,
    // MatAvatarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './conversation-card.html',
  styleUrl: './conversation-card.scss',
})
export class ConversationCard {

msg = '';
newMessage:any;
  messages = [
    { sender: 'Dominic', text: 'Hello!', time: '10:00', isMe: false, avatar: 'assets/avatars/user1.jpg' },
    { sender: 'You', text: 'Hi, How are you? What about our next meeting?', time: '10:01', isMe: true },
    { sender: 'Geneva', text: 'Yeah everything is fine', time: '10:01', isMe: false, avatar: 'assets/avatars/user2.jpg' },
    { sender: 'Dominic', text: 'Wow that\'s great', time: '10:02', isMe: false, avatar: 'assets/avatars/user1.jpg' },
  ];
  sendMessage() {
    if (this.msg.trim()) {
      this.messages.push({
        sender: 'You',
        text: this.msg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
      });
      this.msg = '';
    }
  }
}
