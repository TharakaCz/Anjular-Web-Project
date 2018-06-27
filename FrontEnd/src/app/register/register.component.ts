import {Component, ElementRef, OnInit} from '@angular/core';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: PostService, private elem: ElementRef) { }

  ngOnInit() {

  }


  RegisterDevolpoer() {

    console.log("Test1");

    let Email = this.elem.nativeElement.querySelector('#email').value;
    console.log(Email);
    let formData = new FormData();

    let Cname = this.elem.nativeElement.querySelector('#name').value;
    let Cemail = this.elem.nativeElement.querySelector('#email').value;
    let Coption = this.elem.nativeElement.querySelector('#option').value;
    let Cpassword = this.elem.nativeElement.querySelector('#password').value;
    let Cconfirm = this.elem.nativeElement.querySelector('#confirm').value;

    formData.append('Cname', Cname);
    formData.append('Cemail', Cemail);
    formData.append('Coption', Coption);
    formData.append('Cpassword', Cpassword);
    formData.append('Cconfirm', Cconfirm);

    if (Cconfirm==Cpassword){
      this.service.RegisterDevolpoer(formData)
        .subscribe(res => {
          if (res.json() === 1) {
            console.log("Sucsess");
          } else {
            console.log("Fail");
          }
        });
    }

  }

}
