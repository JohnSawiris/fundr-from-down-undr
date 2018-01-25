import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './project.model';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(input: Project[], filter: string[]){
    const output: Project[] = [];
    if(filter[0] === "charity") {
      for(let project of input) {
        if(project.type === "charity") {
          output.push(project);
        }
      }
      return output;
    } else if (filter[0] === "product") {
      for (let project of input) {
        if(project.type === "product") {
          output.push(project);
        }
      }
      return output;
    } else if (filter[0] === "name") {
      for (let project of input) {
        const name = project.name.toLowerCase();
        if (name.includes(filter[1].toLowerCase())) {
          output.push(project);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
