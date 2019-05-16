import { Injectable } from '@angular/core';
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage/ngx";
import {debuglog} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  protected _isLogged: boolean = false;
  protected _storage: any;

  constructor(private secureStorage: SecureStorage) {

  }

  async initAuth() {
      this.secureStorage.create('my_store_name')
          .then((storage: SecureStorageObject) => {
              // debugger;
              // console.log(storage);
              // this._storage = storage;
              // storage.get('auth').then(
              //     data => {
              //         console.log(data);
              //     },
              //     error => console.log(error)
              // );
          }, (err) => {
            console.log(err);
          });

  }

   signIn(name: string, psw: string) {
    this._storage.set('auth','1');
    this._storage.set('uname',name);
    this._isLogged = true;
  }

  get isLogged() {
    return this._isLogged;
  }

  logout() {
    this._storage.remove('auth');
    this._storage.remove('uname');
    this._isLogged = false;
  }

  signUp(name: string, psw: string) {

  }
}
