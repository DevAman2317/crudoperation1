import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EngineerService } from '../service/engineer.service';

@Component({
  selector: 'app-update-eng',
  templateUrl: './update-eng.component.html',
  styleUrls: ['./update-eng.component.css']
})
export class UpdateEngComponent {

constructor(private engserveice:EngineerService, private activerout:ActivatedRoute){
activerout.params.subscribe(param=> this.detabyparam=param)
this.engById()
}

detabyparam:any
updateform= new FormGroup({
  id: new FormControl(),
  firstName: new FormControl(),
  lastName: new FormControl(),
  emailId: new FormControl()
})

engById(){
  this.engserveice.getbyid(this.detabyparam.id).subscribe((res:any)=> this.updateform.setValue(res))
}
updateEng(){
  this.engserveice.putdata(this.detabyparam.id,this.updateform.value).subscribe((res)=> console.log(res))
  
}




}

