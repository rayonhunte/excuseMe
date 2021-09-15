import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExcusesService {

  constructor(private fireStore: Firestore) { }


  getExcuses(): Observable<any[]> {
    const collect = collection(this.fireStore, 'excuses');
    return collectionData(collect)
  }
}
