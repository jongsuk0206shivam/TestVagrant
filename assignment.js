let teams_perf = [
    { name: 'GT', points: 20, last5: ['won', 'won', 'lose', 'lose', 'win'] },
    { name: 'LSG', points: 18, last5: ['won', 'lose', 'lose', 'win', 'win'] },
    { name: 'RR', points: 16, last5: ['won', 'lose', 'won', 'lose', 'lose'] },
    { name: 'DC', points: 14, last5: ['won', 'won', 'lose', 'won', 'lose'] },
]


// Function to retrieve teams that have two consecutive losses

function retrieveTeamsWithTwoConsLoss(){
    let filtered_teams = teams_perf.filter((team)=>{
        let cons_count = 0;
        for(let i = 0; i < 5; i++){
          if(team.last5[i] === 'lose'){
            cons_count++;
          }else{
            if(cons_count === 2){
              return true;
            }
            cons_count = 0;
          }
        }
        return cons_count === 2;
    })
    let sum = 0;
    for(let team in filtered_teams){
      sum+=team.points;
    }
    let avg_points = sum/filtered_teams.length;
    return avg_points;
}

// Function to retrieve teams that have N consecutive losses

function retrieveTeamsWithNConsLoss(N){
    let filtered_teams = teams_perf.filter((team)=>{
        let cons_count = 0;
        for(let i = 0; i < 5; i++){
          if(team.last5[i] === 'lose'){
            cons_count++;
          }else{
            if(cons_count === N){
              return true;
            }
            cons_count = 0;
          }
        }
        return cons_count === N;
    })
    let sum = 0;
    for(let team in filtered_teams){
      sum+=team.points;
    }
    let avg_points = sum/filtered_teams.length;
    return avg_points;
}