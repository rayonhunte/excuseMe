import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcusesService } from '../shared/excuses.service';

@Component({
  selector: 'app-excuse',
  templateUrl: './excuse.component.html',
  styleUrls: ['./excuse.component.css']
})
export class ExcuseComponent implements OnInit {

  excuses$: Observable<any> = this.excuseService.getExcuses()
  intro: string = ''
  goat: string = ''
  delay: string = ''


  constructor(private excuseService: ExcusesService) { }

  ngOnInit(): void {
  }

}
