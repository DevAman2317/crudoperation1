import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  constructor(private engineer:HttpClient) { 

  }
  baseurl=`http://3.110.193.86:4444/`
  getdata(){
    return this.engineer.get(`${this.baseurl}engineer`)
  }
  postdata(formdata:any){
    return this.engineer.post(`${this.baseurl}engineer`,formdata)
  }
  getbyid(id:number){
    return this.engineer.get(`${this.baseurl}engineer/${id}`)
  }
  putdata(id:number, body:any){
    return this.engineer.put(`${this.baseurl}engineer/${id}`,body)
  }
  deletedata(id:number){
    return this.engineer.delete(`${this.baseurl}engineer/${id}`)
  }

}