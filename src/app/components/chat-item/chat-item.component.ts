import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../pages/chat/message'

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  constructor() { }

  @Input('message')
  private message: Message;

  ngOnInit() {
  }

}
