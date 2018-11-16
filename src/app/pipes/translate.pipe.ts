import { Pipe, PipeTransform} from '@angular/core';

const mapLang = {
    "fr": {
        "KEY_SAVE": "Sauvegarder"            
    }
}

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    transform(
        mot: string, lang: string
    ): string {
        if (!lang || !['fr'].includes(lang)) {
            return "NA";
        }
        return mapLang[lang][mot] ;
    }
}