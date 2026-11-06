import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonInput, IonButton, IonGrid, IonRow, IonCol, IonInputPasswordToggle, IonIcon, IonTabs, IonTab, IonTabBar, IonTabButton, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
  imports: [IonInput, IonButton, RouterLink, IonGrid, IonRow, IonCol, IonInputPasswordToggle, IonIcon, IonTabs, IonTab, IonTabBar, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class UserLoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
