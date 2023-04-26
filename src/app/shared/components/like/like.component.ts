import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() isLiked!: boolean 
  @Output() emitLikeStatus : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
    
  }
  onlikeislike(){
    this.isLiked =!this.isLiked
    this.emitLikeStatus.emit(this.isLiked)
  }

}
