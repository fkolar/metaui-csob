import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialRulesModule} from '@ngx-metaui/material-rules';
import {MetaConfig, MetaUIRulesModule} from '@ngx-metaui/rules';
import * as userRules from './user-rules';
import {CustomerViewComponent} from './customer/customer-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,

    MetaUIRulesModule.forRoot(),
    MaterialRulesModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private config: MetaConfig) {
    // mandatory - you need to register user's defined rules and types since there is no
    // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);
  }
}
