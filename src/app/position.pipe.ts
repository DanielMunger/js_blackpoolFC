import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'positionFilter'
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], position) {
    var output: Player[] = [];

    if(input!=null) {
      if(position==="all") return input;
      else {
        for(var i = 0; i<input.length; i++) {
          if (input[i].position === position) {
            console.log("in filter");
            output.push(input[i])
          }
        }
        return output;
      }
    } else {
      return input;
    }
  }
}
