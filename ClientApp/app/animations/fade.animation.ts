// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fade =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fade', [
        transition('void => *',[
            style({opacity: 0}),
            animate(500)
        ])
   ]);