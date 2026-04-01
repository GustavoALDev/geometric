import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  whatsappUrl = 'https://api.whatsapp.com/send/?phone=5571999999999&text=Ol%C3%A1+Geometric%21+Preciso+de+or%C3%A7amento+de+servi%C3%A7o+de+Topografia!&type=phone_number&app_absent=0';
}
