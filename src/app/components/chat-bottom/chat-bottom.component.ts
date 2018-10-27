import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../pages/chat/message'
import { DialogflowService } from '../../services/dialogflow.service'
@Component({
  selector: 'app-chat-bottom',
  templateUrl: './chat-bottom.component.html',
  styleUrls: ['./chat-bottom.component.css']
})
export class ChatBottomComponent implements OnInit {

  constructor(private dialogFlowService : DialogflowService) { }


  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  ngOnInit() {
  }


  public sendMessage(): void {
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res);
      this.messages.push(
        new Message(res.result.fulfillment.speech)
      );
    });


  }

}
