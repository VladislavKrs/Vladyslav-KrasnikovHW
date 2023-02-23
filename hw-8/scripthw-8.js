const str = 'МЮ Арсенал МС Ліверпуль Евертон Фулхем Бренфорд Тотенхем';
let arr = str.split (' ');{

arr.sort((a, b) => {

    if(a.length > b.length){
    return 1;
    }
    if(a.length < b.length){
    return -1;
}
    if(a.length === b.length){
    return 0;
}
})

console.log(arr);}

arr.splice(1, 3);
console.log(arr);