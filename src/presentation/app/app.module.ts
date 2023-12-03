import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "@presentation/components/components.module";
import { shoppingCartReducer } from "./state/shopping-cart/shopping-cart.reducer";
import { ShoppingEffects } from "./state/shopping-cart/shopping-cart.effects";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ shopping: shoppingCartReducer }),
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
