import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AzzyztedDataRoutingModule } from './app-routing.module';
import { StructEditorComponent } from './struct-editor';

@NgModule({
  declarations: [
    AppComponent,
    StructEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AzzyztedDataRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
