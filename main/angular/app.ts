/**
 * Created by aubhadia on 11/20/2015.
 */

import {bootstrap, Component} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: '<h1>My First Window App</h1>' +
              '<div><input (keyup)="toDo($event)"></div>' +
              '<div>{{value}}</div>'
})
export class AppComponent {
    value = '';
    toDo(event){
        this.value = event.target.value;
    }
}
bootstrap(AppComponent);