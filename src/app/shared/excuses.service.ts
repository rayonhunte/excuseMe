import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExcusesService {


  constructor(private fireStore: Firestore) { }


  getExcuses(): Observable<any> {
    return collectionData(collection(this.fireStore, 'excuses'))
  }
}


