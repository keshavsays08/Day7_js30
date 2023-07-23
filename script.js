const people = [
    { name: 'Vivek', year: 1996 },
    { name: 'Neha', year: 1992 },
    { name: 'Keshav', year: 2002 },
    { name: 'Abhinav', year: 2006 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super Good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

//some and Every checks
//array.prototype.some()// is at least one person 19?
//array.prototype.every()// is everyone 19?

const isAdult = people.some(function (person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
})

//lil short code
const isAdult2 = people.some((person) => {
    const currentYear2 = (new Date()).getFullYear();
    return currentYear2 - person.year >= 19;
})

//lil more short code this is called implicit return 
const isAdult3 = people.some((person) => ((new Date()).getFullYear() - person.year >= 19
));

console.log(isAdult);
console.log(isAdult2);
console.log(isAdult3);

const allAdults = people.every((person) => ((new Date()).getFullYear() - person.year >= 19
));
console.log(allAdults);

//array.prototype.find()
//find is like filter, but instead returns just the one you are looking for
//find the comment with the ID of 823423

const commentById = comments.find(function(comment){
if(comment.id===823423){
    return true;
}
});
console.log(commentById);


//this is short version
const commentById1=comments.find(comment1=>(comment1.id===523423))
console.log(commentById1);

const index =comments.findIndex(comment1=>(comment1.id===523423))
console.log(index);


//deleting a  particular comment 
// comments.splice(index,1);
comments.splice(index,2);

console.table(comments);

// const newComments = [
//     ...comments.slice(0,index0),
//     ...comments.slice(index0+1)
// ];


