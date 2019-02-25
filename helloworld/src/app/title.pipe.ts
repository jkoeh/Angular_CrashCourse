import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;
    let texts = value.split(' ');
    for(let i = 0; i< texts.length; i++){
      let text = texts[i];
      if (i!=0 && this.isPreposition(texts[i])){       
        texts[i]=text.toLowerCase();
      }
      else{
        texts[i]=this.toTitleCase(text);
      }
    }
    return texts.join(" ")
  }
  private toTitleCase(text: string): string{
    return text.substr(0, 1).toUpperCase()+text.substr(1).toLowerCase();
  }
  private isPreposition(value: string):boolean{
    let preposition = ['of', 'to', 'is', 'are'] ;
    return preposition.includes(value);
  }
}
