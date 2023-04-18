import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  name='Angel Eron Cid lima'
  title = 'https://www.w3schools.com/howto/img_avatar.png';

  @Input()alt:string = ''
  @Input()img:string = '';
  @Output() loaded = new EventEmitter<string>();
  counter = 0;
  showImg = true;

  constructor(
  ){
     //Before render
    //No async -- Once time
    console.log('Contructor','imgValue =>', this.img)
  }

  ngOnInit():void{
    //Before render
    //async - fetch --Once time
    // console.log('ngOnInit','imgValue',this.img)
    // window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('Run counter')
    // },1000
    // )
  }

}
