import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../pages/chat/message'
import { DialogflowService } from '../../services/dialogflow.service'

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.css']
})
export class ChatMainComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService : DialogflowService) { }

  ngOnInit() {

  }

  public sendMessage(): void {
    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages[0] = new Message(res.result.fulfillment.speech);
    });


  }
}
