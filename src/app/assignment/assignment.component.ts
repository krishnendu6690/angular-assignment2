import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
UserName='';
allowNewServer=true;

  constructor() { }

  ngOnInit(): void {
  }
  onResetClick(){
    this.UserName='';
    this.allowNewServer=true;
  }
  onKeyType(event: Event){
    this.allowNewServer=false;
  }
}
