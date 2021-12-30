import { 
  Component, Input, EventEmitter, Output, OnInit, 
  OnChanges, DoCheck, SimpleChanges,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  //to allow other component to update this property, we use Input decorator (function)
  //Input decorator can be applied to properties 
  //"img" is an alias that can be used in parent template
  @Input('img') postImg = ''

  //Events are the best way for child-parent component communication
  //any kind of data can be sent
  //we add type safety by using generics <string>
  //problem: how can parent register to listen to this custom event?
  //solution: @Output() decorator
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('PostComponent constructor() called', this.postImg)
  }

  //run after binding has occured (parent=>child), so postImg will be set
  ngOnInit(): void {
    console.log('PostComponent ngOnInit() called', this.postImg)
  }

  //called when some bound properties have changed
  ngOnChanges(changes: SimpleChanges): void {
      console.log("PostComponent ngOnChanges() called")
  }

  //called after default change-detector has run
  ngDoCheck(): void {
      console.log("PostComponent ngDoCheck() called")
  }

  ngAfterContentChecked(): void {
    console.log("PostComponent ngDoCheck() called")      
  }

  ngAfterContentInit(): void {
    console.log("PostComponent ngAfterContentChecked() called")      
  }

  ngAfterViewChecked(): void {
    console.log("PostComponent ngAfterViewChecked() called")      
  }

  ngAfterViewInit(): void {
    console.log("PostComponent ngAfterViewInit() called")
  }

  ngOnDestroy(): void {
    console.log("PostComponent ngOnDestroy() called")      
  }
}
