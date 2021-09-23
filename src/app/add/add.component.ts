import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      intro: new FormControl('', [Validators.required, Validators.minLength(7)]),
      goat: new FormControl('', [Validators.required, Validators.minLength(7)]),
      delay: new FormControl('', [Validators.required, Validators.minLength(7)])
    });
  }


  get intro(): any {
    return this.excuseForm.get('intro');
  }

  get goat(): any {
    return this.excuseForm.get('goat');
  }

  get delay(): any {
    return this.excuseForm.get('delay');
  }

  onSubmit() {
    console.log(this.excuseForm.value);
  }

}
