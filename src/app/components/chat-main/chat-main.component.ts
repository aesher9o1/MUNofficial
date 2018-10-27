import { Component, OnInit,Input } from '@angular/core';
import { Message } from '../../pages/chat/message'

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  @Input('messages')
  private messages : Message[];
  
  constructor() { }

  ngOnInit() {

  }
  

}
