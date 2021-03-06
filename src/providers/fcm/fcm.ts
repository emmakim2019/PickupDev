import { Injectable } from '@angular/core';
import {FirebaseX} from "@ionic-native/firebase-x/ngx";
//import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: FirebaseX,
    public afs: AngularFirestore,
  ) {}

//  private platform: Platform






  async getToken() {

    let token;



      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();


    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'testUser',
    }

    return devicesRef.doc(token).set(docData)
  }



    subscribeToTopic(topic){
        return this.firebaseNative.subscribe(topic)
    }
  listenToNotifications() {
    return this.firebaseNative.onMessageReceived()

  }


}
