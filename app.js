document.getElementById("myBtn").addEventListener("click", function(){ 
  const team1_goals = document.getElementById("team1_goals").value;
  const team2_goals = document.getElementById("team2_goals").value;
  console.log(team1_goals);
  console.log(team2_goals);
  if (team1_goals > team2_goals) {
    document.getElementById("winner").textContent = "Team 1";  
  }
  else if (team1_goals < team2_goals) {
   document.getElementById("winner").textContent = "Team 2"; 
  }
  else {
    document.getElementById("winner").textContent = "Equal"; 
  }
  
  let text = "Team 1 score list : ";
  let arr1 = get_summing_subsets(team1_goals);
  arr1.sort();
  arr1.forEach(myFunction);
  function myFunction(value) {
    text += "(" + value + ") ";
  }

  text += "</br>"

  text += "Team 2 score list : ";
  let arr2 = get_summing_subsets(team2_goals);
  arr2.sort();
  arr2.forEach(myFunction2);
  function myFunction2(value) {
    text += "(" + value + ") ";
  }
  
  document.getElementById("score").innerHTML = text;
});

function get_summing_subsets(target){
     let finish = [];
     let working = [[]];
     while (working.length){
         let next_work = [];
         for (let i = 0; i < working.length; i++){
             for (let j = 1; j <= target; j++){
                 let subset = working[i].concat([j]);
                 let sum = subset.reduce((a,b) => a + b, 0);
                 if (sum <= target){
                     if (sum == target) {
                      let ok = 1;
                      for(var k=1; k<subset.length; k++){
                        if (subset[k-1] > subset[k]) {
                          ok = 0;
                          break;
                        }
                      }
                      if (ok == 1) {
                        finish.push(subset);
                        console.log(subset);
                      }
                     }
                     else {
                      next_work.push(subset);
                     }
                 }
             }
         }
         working = next_work
     }
     return finish;
}