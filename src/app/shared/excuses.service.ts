import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, getFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExcusesService {



  constructor(private fireStore: Firestore) { }


  getExcuses(): Observable<any> {
    return collectionData(collection(this.fireStore, 'excuses'))
  }

  async addExcuse(excuse: {
    excuse: {
      intro: string,
      goat: string,
      delay: string,
    }
  }) {
    const db = getFirestore()
    const docRef = await addDoc(collection(this.fireStore, 'excuses'), excuse)
  }

}


