import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-people',
  templateUrl: './basic-people.component.html',
  styleUrls: ['./basic-people.component.css']
})
export class BasicPeopleComponent implements OnInit {
  subject = {
    name: "Gezin beheren",
    url: "/basics/people"
  };
  constructor() { }

  ngOnInit() {
  }
 goTo(id) {
      // this will scroll the page up
      window.location.hash = id;

      // after page scrolls up, scroll down to correct level
      // https://github.com/angular/angular/issues/6595
      setTimeout(() => {
        document.querySelector("#" + id).scrollIntoView();
      });
    }
}
