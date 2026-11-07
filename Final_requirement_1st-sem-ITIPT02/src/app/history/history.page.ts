import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonTabBar, IonTabButton, IonButtons, IonButton, IonIcon, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonFooter, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { calendarOutline, personOutline, timeOutline, barChartOutline, menuOutline, archiveOutline } from 'ionicons/icons';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, RouterLink, IonTabBar, IonTabButton, IonButtons, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonFooter, IonButton, IonIcon,  CommonModule, FormsModule],
})
export class HistoryPage implements OnInit {
  constructor() {
    addIcons({ calendarOutline, personOutline, timeOutline, barChartOutline, menuOutline, archiveOutline });
  }

  ngOnInit() {}
}
