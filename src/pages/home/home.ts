import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  firstname:string;
  lastname:string;
  cell:string;
  email:number;

  login(){
    // this.navCtrl.push(WelcomePage);
    console.log("firstname: "+this.firstname);
    console.log("lastname: "+this.lastname);
    console.log("cellphone Number"+this.cell)
    console.log("Email Address: "+this.email)
  }

  goToWelcome(firstname, lastname){
    firstname = firstname || 'Enter your Name';
    lastname = lastname || 'your lastname';

    this.navCtrl.push(WelcomePage,{
      data:firstname,
      data1:lastname
    });
  }

  // formgroup:FormGroup;
  // frstname:AbstractControl;
  // lstname:AbstractControl;

  constructor(public navCtrl: NavController) {
    // public formbuilder:FormBuilder
    // this.formgroup = formbuilder.group({
    //   frstname:['', Validators.required],
    //   lstname:['', Validators.required]
    // });
    // this.frstname = this.formgroup.contains['frstname'];
    // this.lstname = this.formgroup.contains['lstname'];
  }

}
