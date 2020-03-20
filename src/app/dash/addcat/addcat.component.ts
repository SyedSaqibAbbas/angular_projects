import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CatService } from 'src/app/_service/cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  catData;
  catForm:FormGroup;
  constructor(private fb:FormBuilder , private catser:CatService, private router:Router ) { 
    this.catForm=this.fb.group({
      'empname' :['', Validators.required],
      'empcom' :['', Validators.required],
      'empemail' :['', Validators.required],
      'empcontact' :['', Validators.required],
      'empdes' :['', Validators.required],

    })
  }

  ngOnInit() {
  }

  insertCat()
  {
    this.catData=this.catForm.getRawValue()
    console.log(this.catData);
    this.catser.insertCat(this.catData)
    alert("inserted")
    setTimeout(()=>{ this.catForm.reset()}, 1000)
  }

}
