import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.page.html',
  styleUrls: ['./admin-edit-profile.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class AdminEditProfilePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
