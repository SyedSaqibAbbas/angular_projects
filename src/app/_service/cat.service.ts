import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor( private firebase:AngularFireDatabase) { 
    this.getCat()
  }
  catList:AngularFireList<any>

  getCat()
  {
    this.catList=this.firebase.list('categories')
    return this.catList.snapshotChanges()
  }

  insertCat(catData)
  {
    console.log(catData)
    this.catList.push({
      EmpName: catData.empname,
      Company: catData.empdes,
      EmailID: catData.empemail,
      Contact: catData.empcontact,
      Designation: catData.empdes,
    })
  }

  deleteCat(id)
  {
    let data=confirm("are you sure?")
    if(data==true)
    {
      this.catList.remove(id)
    }
  }

}
