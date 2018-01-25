import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { routing } from './app.routing';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SearchByPipe } from './search-by.pipe';
import { ProjectFundComponent } from './project-detail/project-fund/project-fund.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    SearchByPipe,
    ProjectFundComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
