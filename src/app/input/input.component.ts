import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../chat.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() userAuth: string;
  @ViewChild('chatMsg') inputRef: ElementRef;

  constructor(
    private msgService: ChatService
  ) { }

  ngOnInit() {
  }

  sendMsg(msg) {
    console.log(msg);
    if (msg !== null) {
      const message = {
        msg: msg,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message);
    }
    this.inputRef.nativeElement.value = '';
  }

}
