import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { QrCodeReader } from "../components/QrCodeReader";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Qr Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Qr Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QrCodeReader />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
