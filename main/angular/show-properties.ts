/**
 * Created by aubhadia on 11/20/2015.
 */

import {bootstrap, Component, CORE_DIRECTIVES,ViewEncapsulation} from 'angular2/angular2';
//import {AppComponent} from './app';
@Component({
    selector: 'display',
    template: '<p class="gr" (click)="greet()">My name: {{myName}}</p>' +
                 '<p>Friends:</p>' +
                '<ul>' +
                '<li *ng-for="#name of names">' +
                '{{ name }}' +
                '</li>' +
                '</ul>' +
                '<p *ng-if="names.length > 3">You have many friends!</p>',
    styles: [`
    p{
      background: green;
      color: #fff;
    }
  `],
    //encapsulation: ViewEncapsulation.Native,
    directives: [CORE_DIRECTIVES]
})
class Display {
    names = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myName = 'Alice';
    greet(){
        alert("hi my name is " + this.myName);
    }
}
bootstrap(Display);