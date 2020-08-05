import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ส่วนของการเรียกใช้ component ในที่นี้ ระบบได้สร้างมาให้ อัตโนมติแล้ว
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  //ส่วนที่ใช้ในการระบุ component ที่เราสร้างขึ้นมา
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  //ส่วนที่เรียกใช้ Module จากภายนอก
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
