import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private firestore:AngularFirestore) { }

  create(title:string,answers:string[]):void {
    const pollsDocsRef = this.firestore.collection('polls');
    pollsDocsRef.add({'title':title,'answers':answers}).catch((e)=>console.log(e));
  }
}
