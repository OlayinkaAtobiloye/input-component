import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() color?: string;
  @Input() error?: boolean;
  @Input() disabled?: boolean;
  @Input() helpertext?: string;
  @Input() size?: string;
  @Input() fullWidth?: boolean;
  @Input() multiline?: boolean;
  @Input() value?: string = 'Placeholder';
  @Input() row?: number;

  constructor() { }

  getStyles() {
    return(
      {
        'color': this.error ? '#D32F2F' : '#828282',
        'border-color': this.error ? '#D32F2F' : '#828282'
    }
    )
  }

  ngOnInit(): void {
  }

}
