import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit, Output, EventEmitter,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit{
  img:string = '';
  @Input('img') set changeImg(newImg:string){
  this.img = newImg
}
  @Output() loaded = new EventEmitter<string>();
  // counter = 0;
  // showImg = true;

  constructor(
  ){
     //Before render
    //No async -- Once time
    console.log('Contructor','imgValue =>', this.img)
  }

  ngOnChanges(changes:SimpleChanges){
    //Before render
    //Change inputs -- inputs
      console.log('ngOnChanges','imgValue', this.img)
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
  imgLoaded(){

  }
  ngAfterViewInit(){
    //After render
    //handler children
    console.log('ngAfterViewInit')
  }
  ngOnDestroy(): void {
      //Only with delete
      console.log('ngOnDestroy');
      // window.clearInterval(this.counter);
  }
  imgError(img:string){
  }
}
