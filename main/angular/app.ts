/**
 * Created by aubhadia on 11/20/2015.
 */

import {bootstrap, Component} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: '<h4>Angular 2.0 App</h4>' +
              '<div><input (keyup)="toDo($event)"></div>' +
              '<p>Text in the input: {{value}}</p>'
})
class AppComponent {
    value = '';
    toDo(event){
        this.value = event.target.value;
    }
}
bootstrap(AppComponent);