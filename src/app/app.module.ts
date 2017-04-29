import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicNavigationComponent } from './basic-navigation/basic-navigation.component';
import { BasicHorsesComponent } from './basic-horses/basic-horses.component';
import { BasicPeopleComponent } from './basic-people/basic-people.component';
import { BasicSettingsComponent } from './basic-settings/basic-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WelcomeComponent,
    BasicNavigationComponent,
    BasicHorsesComponent,
    BasicPeopleComponent,
    BasicSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'', component: WelcomeComponent},
      { path: 'basics/registration', component: RegistrationComponent},
      { path: 'basics/horses', component: BasicHorsesComponent},
      { path: 'basics/people', component: BasicPeopleComponent},
      { path: 'basics/settings', component: BasicSettingsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
