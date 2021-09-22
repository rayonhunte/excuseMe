import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcuseComponent } from './excuse/excuse.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';

// firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


// firebase config
import { environment as env } from '../environments/environment';
// import { NgxsModule } from '@ngxs/store';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
// import { ExcuseState } from './store/excuse.store';
// import { NgxsFirestoreModule } from '@ngxs-labs/firestore-plugin';

@NgModule({
  declarations: [
    AppComponent,
    ExcuseComponent,
    ProfileComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(env.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
