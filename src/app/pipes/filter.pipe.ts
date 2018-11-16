import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(
        items: string[], searchQuery: string
    ): string[] {
        if (!searchQuery) {
            return items;
        }

        searchQuery = searchQuery.toLowerCase();

        const res = items.filter( el => el.includes(searchQuery));

        return res;
    }
}