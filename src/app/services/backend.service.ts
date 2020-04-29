import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public afAuth: AngularFireAuth) { }

  getConfig(){
    return environment.social;
  }
  login(loginType,formData?) {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if(formData) {
      return this.afAuth.signInWithEmailAndPassword( formData.email, formData.password);
    } else {
      let loginMethod;
      
      if(loginType == 'GOOGLE') { loginMethod = new firebase.auth.GoogleAuthProvider(); }
      return this.afAuth.signInWithRedirect(loginMethod);
    }
  }
  // me thod to retreive firebase auth after login redirect
  redirectLogin(){
    return this.afAuth.getRedirectResult();
  }
  logout() {
    return this.afAuth.signOut();
  }
  isUserLoggedIn(){
    return this.afAuth.authState;
  }


  // fake functions 
  getCartTotal(){
    let fakeresponse = "10";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        },2000)
        }
    )
}
getUserStatus(){
  let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}

getProducts(collType){
  let fakeresponse = [{
    'category':"test",
    'scategory':"Test",
    'name':"Product Name",
    'price':"300",
    '_id':"123"
  }];
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
    }
  )
}
getFilterProducts(collType,filters){
  let fakeresponse = [{
    'category':"test",
    'scategory':"Test",
    'name':"Product Name",
    'price':"300",
    '_id':"123"
  }];
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
    }
  )
}

setProducts(collType,filters){
  let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}

updateProducts(collType,filters){
  let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}

getOneProductDoc(collType,docId)
{let fakeresponse = {
  'category':"test",
  'scategory':"Test",
  'name':"Product Name",
  'price':"300",
  '_id':"123",
};
return Observable.create(
  observer => {
    setTimeout(() => {
      observer.next(fakeresponse)
    },2000)
  }
)

}

delOneProductDoc(collType,docId)
{let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}

updateShoppingInterest(collType,docId)
{let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}
updateShoppingCart(collType,docId)
{let fakeresponse = true;
  return Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(fakeresponse)
      },2000)
      }
  )
}


}

