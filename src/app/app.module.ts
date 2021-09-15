import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcuseComponent } from './excuse/excuse.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';

// firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// firebase config
import { environment as env } from '../environments/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ExcuseState } from './store/excuse.store';

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
    NgxsModule.forRoot([ExcuseState], { developmentMode: !env.production }),
    NgxsLoggerPluginModule.forRoot({ disabled: env.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
