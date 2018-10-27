import { Component, OnInit } from '@angular/core';
import { Message } from './../message'

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit {
  public message : Message;
  public messages : Message[];

  constructor() { 
    this.message = new Message('');
    this.messages = [
      new Message('Welcome to chatbot universe')
    ];
  }

  ngOnInit() {
  }

}
