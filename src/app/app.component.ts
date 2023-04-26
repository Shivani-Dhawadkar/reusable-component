import { Component } from '@angular/core';
import { Ireels } from './shared/models/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusableComponent';
 
  reels : Array<Ireels>= [
    {
      title : '1',
      likeCount : 123,
      isLike : true,
      id : 1,
      img : 'https://source.unsplash.com/random/?city,night'
    },
    {
      title : '2',
      likeCount : 1234,
      isLike : false,
    id : 2,
    img : 'https://source.unsplash.com/random/?city,mountains'
    },
    {
      title : '3',
      likeCount : 1235,
      isLike : false,
      id : 3,
      img : 'https://source.unsplash.com/random/?city,snowfall'
    },
    {
      title : '4',
      likeCount : 567,
      isLike : false,
      id : 4,
      img : 'https://source.unsplash.com/random/?city,nature'
    },
    {
      title : '5',
      likeCount : 123788,
      isLike : false,
      id: 5,
      img : 'https://source.unsplash.com/random/?city,garden'
      
    },
    {
      title : '6',
      likeCount : 1236576,
      isLike : false,
      id : 6,
      img : 'https://source.unsplash.com/random/?city,night'
    }
  ]

  getLikeStatus(likestatus : boolean, id: number){
    console.log(likestatus)
    console.log(id)
    this.reels.forEach(reel=>{
      if(reel.id === id){
        if(likestatus){
          reel.likeCount++
        }else{
          reel.likeCount--
        }
      }
    })
  }  
}
