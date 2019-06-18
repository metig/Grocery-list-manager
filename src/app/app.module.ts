import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroceryComponent} from './app.grocery';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
