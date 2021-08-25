const sortByName = (x)=> x;
const sortBySurName = (x)=>x;
const sortByAge= (x)=>x;
let mylist = [1,2,3,4]
let sortType ;
// if (sortType === "AGE"){
//     mylist.sort(sortByAge)
// }else if( sortType === "NAME"){
//     mylist.sort(sortByName)
// }else if(sortType=== "SURNAME"){
//     mylist.sort(sortBySurName)
// }
//1.firt improve ----------------
//add enum const 
const sortTypes = {
    AGE : "AGE",
    NAME : "NAME",
    SURNAME : "SURNAME"
}
// if (sortType === sortType.AGE){
//     mylist.sort(sortByAge)
// }else if( sortType === sortType.NAME){
//     mylist.sort(sortByName)
// }else if(sortType=== sortType.SURNAME){
//     mylist.sort(sortBySurName)
// }
// 2.code of sort run just one time ----------------------

// let sortMethod =""
// if (sortType === sortType.AGE){
//     sortMethod = sortByAge
// }else if( sortType === sortType.NAME){
//     sortMethod = sortByName
// }else if(sortType=== sortType.SURNAME){
//     sortMethod = sortBySurName
// }
// if (!sortMethod)
// return false 
// mylist.sort(sortMethod)

//3. use object except if -------------------------

const SortMethods = {
    [sortTypes.AGE] : sortByAge ,
    [sortTypes.NAME] :sortByName ,
    [sortTypes.SURNAME] : sortBySurName
}
const sortMethod = SortMethods[sortType]
sortMethod && mylist.sort(sortMethod)


