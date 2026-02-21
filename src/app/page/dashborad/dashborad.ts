import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { customerModel } from '../../model/type';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashborad',
  imports: [NgForOf,FormsModule],
  templateUrl: './dashborad.html',
  styleUrl: './dashborad.css',
})
export class Dashborad implements OnInit {
  customerList: Array<customerModel>=[];

  constructor(
    private http:HttpClient,
    private crd: ChangeDetectorRef
  ){}

  ngOnInit(): void {
   this.getAll();
  }
  getAll(){
    this.http.get<customerModel[]>(`http://localhost:8080/customer/get/details`).subscribe((data)=>{
      this.customerList=data;
      this.crd.detectChanges();
    });
    console.log(this.customerList);
    
  }

}
