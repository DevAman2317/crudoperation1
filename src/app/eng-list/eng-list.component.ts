import { Component } from '@angular/core';
import { EngineerService } from '../service/engineer.service';

@Component({
  selector: 'app-eng-list',
  templateUrl: './eng-list.component.html',
  styleUrls: ['./eng-list.component.css']
})
export class EngListComponent {
  constructor(private engineer:EngineerService){
    this.engList()
  }

    listdata:any
    engList(){
      this.engineer.getdata().subscribe((res)=> (this.listdata=res))
    }
    deleteEng(id:number){
      this.engineer.deletedata(id).subscribe((res)=> console.log(res))
      this.engList()
    }


}

