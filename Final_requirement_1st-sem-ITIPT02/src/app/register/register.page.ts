import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonInput, IonInputPasswordToggle, IonButton, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonInput, IonInputPasswordToggle, IonButton, CommonModule, FormsModule, IonBackButton, IonButtons],
})
export class RegisterPage implements OnInit {
  constructor() {
    addIcons({ chevronBackOutline });
  }

  ngOnInit() {}
}
