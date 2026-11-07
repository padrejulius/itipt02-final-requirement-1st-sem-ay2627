import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButtons, IonButton, IonIcon, IonCard, IonCardContent, IonAvatar, IonList, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  imports: [IonContent,IonButtons, IonButton, IonIcon, IonCard, IonCardContent, IonAvatar, IonList, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class AdminPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
