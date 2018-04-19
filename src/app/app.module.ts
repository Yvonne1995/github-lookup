import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {NgProgressModule} from '@ngx-progressbar/core';
import {ProfileService} from './profile.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
