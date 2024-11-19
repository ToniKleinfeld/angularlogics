import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input()singlefruit =     {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  };
  // in den klammern mit anführungzeichen z.b "numberFruit" dieser muss aber auch im parent im 'tag' genutzt werden um es zu finden !

  inputData = ''; // durch ngModel ist diese variable an die werte von dem imputfeld geknüpft wie id , und getElement...

  @Output()fruitname = new EventEmitter<string>()

  sendInputData(){
    this.fruitname.emit(this.inputData);
    this.inputData = '';
  }
}
