import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] =[];

  constructor() { }

  // Add message to array
  add(message: string){
    this.messages.push(message);
  }

  // Clear messages string array
  clear(){
    this.messages = [];
  }

}
