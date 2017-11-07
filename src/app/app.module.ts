import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import { CommonModule } from '@angular/common';

import{ ItemsComponent} from './components/item.component';
import { AppComponent } from './app.component';
import {ItemService} from './services/item/item.service';

@NgModule({
  declarations: [
    AppComponent, ItemsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, CommonModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
