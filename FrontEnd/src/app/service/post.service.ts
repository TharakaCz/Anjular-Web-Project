import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostService {

  private url = 'http://localhost/BackEnd/index.php/Registation/getArchitecture';

  constructor(private http: Http) {
  }

  getPost() {
    return this.http.get('http://localhost/BackEnd/index.php/welcome');
  }

  RegisterDevolpoer(formData) {

    console.log('Test2');
    return this.http.post(this.url, formData);


  }

}
