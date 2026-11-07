import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButtons, IonButton, IonIcon, IonCard, IonCardContent, IonAvatar, IonList, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { calendarOutline, personOutline, timeOutline, barChartOutline, menuOutline, archiveOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  imports: [IonContent,IonButtons, IonButton, IonIcon, RouterLink, IonCard, IonCardContent, IonAvatar, IonList, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class AdminPage implements OnInit {
  constructor() {
    addIcons({ calendarOutline, personOutline, timeOutline, barChartOutline, menuOutline, archiveOutline }); 
  }

  ngOnInit() {}
}
