import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule,SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService)

  // frontColorGood = 'green';
  // frontcolorBad = 'red';

  // addComment(comment:string,index:number) {                // kann man so global ansteuern muss man aber später auwendig raussuchen , das diese function eine globen wert ansteuert , wenn diese nicht in der global s.u. steht
  //   this.fruitlistdata.fruitlist[index].reviews.push({
  //     name: 'Toni',
  //     text: comment,
  //   })
  // }

  addComment(comment:string,index:number){                   // oder die function auslagern in die service und hier diese aufrufen
    this.fruitlistdata.addCommentToFruit(comment, index)
  }



}
