import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';



const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
 
  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController) { }

  login( email: string, password: string) {
    const data = { email, password };

    return new Promise( resolve => {
      this.http.post(`${ URL }/api/auth/login`, data)
              .subscribe( resp => {
                //console.log(resp['access_token']);

                if (resp['access_token']) {
                  this.guardarToken(resp['access_token']);
                  resolve(true);
                  console.log(resp['access_token']);
                } else {
                  this.token = null;
                  this.storage.clear();
                  resolve(false);
                  console.log('no funca');
                }
              });
    } );
  }

  logout(){
    this.token = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  async guardarToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
  }
}
