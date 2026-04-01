import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  isSubmitting = signal(false);
  isSubmitted = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);
    // Simulate submission
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      setTimeout(() => this.isSubmitted.set(false), 5000);
    }, 1500);
  }

  contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'contato@geometric.com.br',
      link: 'mailto:contato@geometric.com.br',
    },
    {
      icon: 'phone',
      title: 'Celular',
      value: '+55 (71) 99999-9999',
      link: 'tel:+5571999999999',
    },
    {
      icon: 'location',
      title: 'Endereço',
      value: 'Rua Exemplo, 123, Sala 456\nSalvador – BA, 41820-770',
      link: null,
    },
    {
      icon: 'clock',
      title: 'Horário',
      value: 'Seg – Sex: 8h às 18h',
      link: null,
    },
  ];
}
