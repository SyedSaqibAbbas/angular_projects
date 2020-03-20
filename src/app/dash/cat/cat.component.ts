import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/_service/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  catData;
  constructor(private catser:CatService) { }

  ngOnInit() {

    this.catser.getCat()
    .subscribe(res=>{
      this.catData=res.map(list=>{
        return{
          $key:list.key,
          ...list.payload.val()
        }
      })
      console.log(this.catData)
    })
  }

  delete(id)
  {
    this.catser.deleteCat(id);
  }
}
