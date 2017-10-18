import { Injectable } from '@angular/core';

@Injectable()
export class VerseParserService {

    constructor() { }

    public getVerses(verseReferences: string){
        console.log(this.verseFormatter(verseReferences));
    }

    private verseFormatter(str: string): string[] {
        let verse_list = [];

        if (!/[A-z]/.test(str)) {
            return [];
        }

        str = str.replace(/^\s+|\s+$/gm, '');
        str = str.replace(/;$/, '');

        let list = str.split(';');

        let book: string = "";
        for (let i = 0; i < list.length; i++) {
            list[i] = list[i].replace(/^\s+|\s+$/gm, '');
            list[i] = list[i].replace(/[.]+/g, '');
            let temp = list[i].split(':');

            if (temp[0].search(/.*[A-z]/) != -1) {
                book = temp[0].match(/.*[A-z]/)![0];
                book = book.replace(/\s+/g, ' ');
                let firstChar = book.search(/[A-z]/);
                if (book.charAt(firstChar - 1) == ' ') {
                    book = book.slice(0, firstChar) + book.charAt(firstChar).toUpperCase() + book.slice(firstChar + 1).toLowerCase();
                } else {
                    book = book.slice(0, firstChar) + ' ' + book.charAt(firstChar).toUpperCase() + book.slice(firstChar + 1).toLowerCase();
                }
                book = book.trim();
                
                    var q = list[i].slice(0, list[i].indexOf(':')).match(/.*[A-z]\s*/)![0].length;
                    if (!/\d/.test(list[i].charAt(q))) {
                        q += 1;
                    };
                    list[i] = list[i].slice(q); 
                    list[i] = list[i].replace(/\s+/g, '');
                
                
            }

            list[i] = book + " " + list[i];
        }


        for (var i = 0; i < list.length; i++) {

            if (list[i].search(':') == -1) {
                if (!(/\d$/.test(list[i]))) {
                    list[i] += ' 1';
                }
                verse_list.push(list[i]);  
            } else {
                var temp = list[i].split(':');
                var chap = temp[0];
                chap = chap.replace(/\s+/g, ' ');
                chap = chap.replace(/\s*$/, '');
                var verses = temp[1];
                verses = verses.replace(/\s+/g, '');
                verses.replace(/,$/, '');
                var nums = verses.split(',');
                for (var j = 0; j < nums.length; j++) {
                    verse_list.push(chap + ":" + nums[j]);
                }
            }
        }
        
        return verse_list;
    }

}