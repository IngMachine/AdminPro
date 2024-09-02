import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styles: ``
})
export class IncrementatorComponent implements OnInit {
  
  
  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') valueExit: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number) {

    if (this.progress >= 100 && value >= 0) {
      this.valueExit.emit(100);
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value <= 0) {
      this.valueExit.emit(0);
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;
    this.valueExit.emit(this.progress);
  }

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.progress = 100;
    } else if( newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.valueExit.emit(this.progress);
  }

}
