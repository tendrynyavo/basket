import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des équipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink="/list-joueur/1">
            <IonLabel>Lakers</IonLabel>
          </IonItem>
          <IonItem routerLink="/list-joueur/2">
            <IonLabel>Celtics</IonLabel>
          </IonItem>
          <IonItem routerLink="/list-joueur/3">
            <IonLabel>Cavaliers</IonLabel>
          </IonItem>
          <IonItem routerLink="/list-joueur/4">
            <IonLabel>Sixers</IonLabel>
          </IonItem>
          <IonItem routerLink="/list-joueur/5">
            <IonLabel>Suns</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
