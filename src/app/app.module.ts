import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
import { ChatService } from './chat.service';

const config = {
  apiKey: 'AIzaSyAfnIccjgYhz3O5HhmUNSvi94eqoJ0Av98',
  authDomain: 'ngcolombia-firebase.firebaseapp.com',
  databaseURL: 'https://ngcolombia-firebase.firebaseio.com',
  projectId: 'ngcolombia-firebase',
  storageBucket: 'ngcolombia-firebase.appspot.com',
  messagingSenderId: '327306291013'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
