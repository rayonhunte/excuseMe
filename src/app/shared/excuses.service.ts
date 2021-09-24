import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, getFirestore, arrayUnion, updateDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExcusesService {



  constructor(private fireStore: Firestore) { }


  getExcuses(): Observable<any> {
    return collectionData(collection(this.fireStore, 'excuses'))
  }

  async addExcuse(excuse: { intro: string, goat: string, delay: string }
  ) {
    const db = getFirestore()
    await updateDoc(doc(db, 'excuses', 'intro'), {
      intro: arrayUnion(excuse.intro)
    })
    await updateDoc(doc(db, 'excuses', 'goat'), {
      goat: arrayUnion(excuse.goat)
    })
    await updateDoc(doc(db, 'excuses', 'delay'), {
      delay: arrayUnion(excuse.delay)
    })
  }

}


