import {Component, OnInit} from '@angular/core';
import {RoutingService} from '@ngx-metaui/rules';
import {FormControl} from '@angular/forms';


export interface Animal {
  name: string;
  sound: string;
}


@Component({
  selector: 'ngx-metaui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = new FormControl('');


  constructor(public routingService: RoutingService) {
  }

  ngOnInit(): void {
  }

}
