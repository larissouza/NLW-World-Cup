function createGame(player1, hour, player2){
  return `
     <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}"/>
        <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}"/>
     </li>
    `
}

let delay = 0;
function createCard(date, day, games) {
  
   delay = delay + -0.9;
  return `
  <div class="card" style="animation-delay: ${delay}.s" >
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div> 
    `
}

document.querySelector("#app").innerHTML = `
      <header>
        <img src="assets/logo.svg">
      </header> 

      <main id="card">

      ${createCard(
        "24/11",
        "Quinta",
        createGame("switzerland", "7:00", "cameroon") +
          createGame("uruguay", "10:00", "southkorea") +
          createGame("portugal", "13:00", "ghana") +
          createGame("brazil", "16:00", "serbia")
      )}

       ${createCard(
         "25/11",
         "Quinta",
         
           createGame("netherlands", "13:00", "equador") +
           createGame("brazil", "16:00", "serbia")
       )}
      </main>
    `