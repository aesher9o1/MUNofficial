import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../pages/chat/message'
import { DialogflowService } from '../../services/dialogflow.service'

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  constructor(private dialogFlowService: DialogflowService) { }

  @Input('message')
  private message: Message;


  ngOnInit() {
    var typed2 = new Typed('#text', {
      strings: [this.message.content],
      typeSpeed: 40,
      backSpeed: 0,
      cursorChar: '_',
      fadeOut: true,
      backDelay: 500,
      startDelay: 1000,

    });

    

  }




}
