import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  excuseForm: FormGroup = this.formBuilder.group({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.excuseForm = this.formBuilder.group({
      intro: ['', Validators.required],
      goat: ['', Validators.required],
      delay: ['', Validators.required],
    });
  }


  get intro(): any {
    return console.log(this.excuseForm.get('intro'));
  }

  get goat(): any {
    return this.excuseForm.get('goat');
  }

  get delay(): any {
    return this.excuseForm.get('delay');
  }

  onSubmit() { }

}
