import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Test {
  checked: boolean;
  type: string;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = "";
  @Input() isChecked: boolean = false;
  @Output() checkboxChange = new EventEmitter<Test>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(checked: boolean) {
    this.isChecked = checked;
    this.checkboxChange.emit({checked: this.isChecked, type: this.label});
  }

}
