import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//  gernerate radnom t4xt
randomText = faker.lorem.paragraph(1);

entertedText = '';
onInput(event:any)
{
  this.entertedText = event.target.value;
}
compare(letter:string,enteredLetter:string):any
{
  if(!enteredLetter)
  {
    return "pending";
  }
  return letter === enteredLetter ? 'correct' : 'notCorrect';
}
}
