// const myNums = [1,2,3,4,5,6,7]

// // const newnums = myNums.filter((nums) => nums >4)
// // console.log(newnums);
// const newnums = myNums.filter((nums) => {
//     return nums >4}) // {in this we have to use return}
// console.log(newnums);

const books = [
    { title: 'Bppk one', genre: 'Fiction', pages: 200} ,
    { title: 'Bppk two', genre: 'Documntry', pages: 400 },
    { title: 'Bppk three', genre: 'Fiction', pages: 300 }
]

// const fictionBooks = books.filter((bk) => {
//     return bk.genre === 'Fiction'}  )

// console.log(fictionBooks);
const fictionBooks = books.map( (bk)=> bk.pages  350 )

console.log(fictionBooks);