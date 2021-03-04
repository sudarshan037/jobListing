import { HttpClientModule } from '@angular/common/http';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import  { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobSearchItemComponent } from './job-search-item/job-search-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobServiceService } from './job-service.service';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProtectedComponent } from './protected/protected.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobCardComponent,
    FooterComponent,
    JobSearchItemComponent,
    LoginComponent,
    MainNavComponent,
    RegistrationComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [JobServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
