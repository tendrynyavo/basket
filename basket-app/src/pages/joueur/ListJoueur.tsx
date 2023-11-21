import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';

function ListJoueur() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Lakers</IonCardTitle>
        <IonCardSubtitle>Liste des joueurs</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem routerLink='/dashboard/1'>
            <IonLabel>Lebron James</IonLabel>
          </IonItem>

          <IonItem routerLink='/dashboard/2'>
            <IonLabel>Anthony Davis</IonLabel>
          </IonItem>

          <IonItem routerLink='/dashboard/3'>
            <IonLabel>D'Angelo Russell</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Rui Hachimura</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
export default ListJoueur;