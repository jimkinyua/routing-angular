import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder-component',
  templateUrl: './place-holder-component.component.html',
  styleUrls: ['./place-holder-component.component.css']
})
export class PlaceHolderComponentComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
