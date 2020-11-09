import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {META_RULES, MetaRules} from '@ngx-metaui/rules';
import {User} from '../model/user';


@Component({
  selector: 'ngx-metaui-root',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  object: User;

  operation = 'edit';


  constructor(@Inject(META_RULES) protected meta: MetaRules, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.meta.registerDependency('controller', this);

    this.object = new User('EB0001',
      'Fred', 'Flinstone', new Date(1975, 5, 12),
      'Married', 2, 'Rock and Gravel Company', 'fred@rock.io',
      'Personal', ['Phone']);
  }
}

