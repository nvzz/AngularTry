import { Component } from '@angular/core';
import { INames } from '../list';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {

  title: string = 'FED Academy';

    constructor(){}

    listNames: INames[] = [
        {
          "name": "Alejandro",
          "age": "23"
        },
        {
          "name": "Norma",
          "age": "22"
        }
      ]
    
      addData(){
        const newName = document.getElementById('name') as HTMLInputElement;
        const newAge = document.getElementById('age') as HTMLInputElement;
        
        const send = {
           "name": newName.value,
           "age": newAge.value
         }
    
         this.listNames.push(send);
    
         newName.value = '';
         newAge.value = '';
    
         alert('New entry added');
}
}