import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonTabs, IonTab, IonTabButton, IonCard, IonSearchbar, IonBadge, IonCardContent, IonAvatar, IonList, IonItem, IonFooter, IonLabel, IonTabBar, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { calendarOutline, personOutline, timeOutline, barChartOutline, menuOutline, archiveOutline, createOutline, lockClosedOutline, chevronForwardOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonContent, IonButtons, IonButton, IonSearchbar, IonBadge, RouterLink, IonTabs, IonCard, IonCardContent, IonAvatar, IonList, IonItem, IonTab, IonLabel, IonTabButton, IonFooter, IonTabBar, IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ProfilePage implements OnInit {

  constructor(private alertController: AlertController) {
    addIcons({ 
      calendarOutline, 
      personOutline, 
      timeOutline, 
      barChartOutline, 
      menuOutline, 
      archiveOutline, 
      createOutline, 
      lockClosedOutline, 
      chevronForwardOutline, 
      logOutOutline 
    }); 
  }

  ngOnInit() {}

  async openChangePassword() {
    const alert = await this.alertController.create({
      header: 'Change Password',
      inputs: [
        {
          name: 'oldPassword',
          type: 'password',
          placeholder: 'Old Password'
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password'
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm New Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Na-cancel ang pagpapalit ng password');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Old Password:', data.oldPassword);
            console.log('New Password:', data.newPassword);
          }
        }
      ]
    });

    await alert.present();
  }
}