let games = ["cricket", "tennis","squash", "volleyball"]

//let game = "cricket";

/*for (let i=0; i<games.length;i++){
        console.log(games[i] == 'cricket');


}
*/


/* let gamesObeject = {

//     first: 'cricket',
//     second: 'tennis',
//     third: 'squash',
//     fourth: 'volleyball'


// }

// console.log(gamesObeject.second);*/

// for(i=0; i<games.length;i++){

// if(games[i]=="cricket"){
//  alert("cricket is exist");
// }
// else{
//     alert("cricket not exist");
// }
// }

//shift 
// unshift
//push
//pop

games.push("tabletennis");
games.push("basketball");

console.log(games);

games.unshift("polo");
console.log(games);

games.shift("ridding");
console.log(games);

games.pop("long jump");
console.log(games);

games.splice(2, 0,"jumping", "racing");
console.log(games);