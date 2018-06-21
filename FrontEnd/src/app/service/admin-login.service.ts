import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AdminLoginService {

  private url = 'http://localhost/BackEnd/index.php/AdminLogin/getAdmin';

  constructor(private http: Http) {
  }

  getPost() {
    return this.http.get('http://localhost/BackEnd/index.php/welcome');
  }

  AdminLogin(formData) {

    console.log('Test2');
    return this.http.post(this.url, formData);


  }

}
