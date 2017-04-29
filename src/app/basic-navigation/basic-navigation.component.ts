import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-navigation',
  templateUrl: './basic-navigation.component.html',
  styleUrls: ['./basic-navigation.component.css']
})
export class BasicNavigationComponent implements OnInit {
  subjects = [{
    name: "Registreren",
    url: "/basics/registration"
  },
  {
    name: "Paarden beheren",
    url: "/basics/horses"
  },
  {
    name: "Gezin beheren",
    url: "/basics/people"
  },
  {
    name: "Gegevens aanpassen",
    url: "/basics/settings"
  }];
  constructor() { }

  ngOnInit() {
  }

}
