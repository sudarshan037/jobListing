import { HttpClientModule } from '@angular/common/http';
import 'materialize-css';
import { MaterializeModule } from "angular2-materialize";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobSearchItemComponent } from './job-search-item/job-search-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JobServiceService } from './job-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobCardComponent,
    FooterComponent,
    JobSearchItemComponent
  ],
  imports: [BrowserModule, MaterializeModule, FormsModule, HttpClientModule],
  providers: [JobServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
