// * Aula 270 - Funções como tipo
/*
    _Nota_
*/
type MapStringsCallback = (item: string) => string

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = [];

    for (let i=0; i<array.length; i++){
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, function(item){
    return item.toUpperCase();
});

console.log(abcMapped);


//  @ Module mode
export default {  };
