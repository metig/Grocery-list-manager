import { Component } from '@angular/core';



@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})
export class GroceryComponent {
    task: string;
    tasks = [];



    onClick(){
        this.tasks.push({name: this.task, strike: false});
      this.task = '';
    }
    onDelete(item){
        for(var i = 0;i < this.tasks.length; i++){
            if(item.id == this.tasks[i].id){
                this.tasks.splice(i,1);
                break;
            }
        }
    }
}