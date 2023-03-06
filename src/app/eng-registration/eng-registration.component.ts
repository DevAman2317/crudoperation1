import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EngineerService } from '../service/engineer.service';

@Component({
  selector: 'app-eng-registration',
  templateUrl: './eng-registration.component.html',
  styleUrls: ['./eng-registration.component.css']
})
export class EngRegistrationComponent {
  constructor(private engservice:EngineerService){

  }
registrationForm=new FormGroup({
  firstName: new FormControl(),
  lastName : new FormControl(),
  emailId: new FormControl()
})
registration(){
  this.engservice.postdata(this.registrationForm.value).subscribe((res)=>console.log(res))
}

}
