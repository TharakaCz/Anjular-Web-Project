import {Component, ElementRef, OnInit} from '@angular/core';
import {AdminLoginService} from "../service/admin-login.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private service: AdminLoginService, private elem: ElementRef) { }

  ngOnInit() {
  }
  AdminLogin() {

    console.log("Test1");

    let Email = this.elem.nativeElement.querySelector('#email').value;
    console.log(Email);
    let formData = new FormData();

    let Aemail = this.elem.nativeElement.querySelector('#email').value;
    let Apassword = this.elem.nativeElement.querySelector('#password').value;

    formData.append('Aemail', Aemail);
    formData.append('Apassword', Apassword);




    this.service.AdminLogin(formData)
      .subscribe(res => {
        if (res.json() === 1) {
          console.log("Sucsess");
        } else {
          console.log("Fail");
        }
      });
  }
}
