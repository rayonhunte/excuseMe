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
    this.excuses$.subscribe(data => {
      this.intro = data[2].intro[0]
      this.goat = data[1].goat[0]
      this.delay = data[0].delay[0]
    })
  }

  onIntro(event: any) {
    this.intro = event.target.value
  }

  onGoat(event: any) {
    this.goat = event.target.value
  }

  onDelay(event: any) {
    this.delay = event.target.value
  }

  onRandom() {
    this.excuses$.subscribe(data => {
      this.intro = data[2].intro[Math.floor(Math.random() * data[2].intro.length)]
      this.goat = data[1].goat[Math.floor(Math.random() * data[1].goat.length)]
      this.delay = data[0].delay[Math.floor(Math.random() * data[0].delay.length)]
    })
  }

}
