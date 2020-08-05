import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private age: number;
  private email: string;
  //Dictionary variable
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  //Aray variable
  private skills: string[];

  constructor() { }

  ngOnInit(): void {
    this.name = "parnumat";
    this.age = 23;
    this.email = "parnumat.ingeni@gmail.com";

    this.address = {
      street: "800/8-9 Dsok Din Dang",
      city: "Din Dang",
      province: "Bangkok",
      postcode: "10400"
    }

    this.skills = ["Programming", "Basketball", "Painting"]
  }

  addSkill(skill) {
    this.skills.unshift(skill);

    return false; //เพื่อทำให้หน้า Page ไม่เกิดการ Refesh
  }
  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        //splice คือ เอาข้อมูลที่ Index นั้นๆออกจาก
        this.skills.splice(index, 1);//1 คือจำนวนที่เอาออก
      }
    });

  }

}
