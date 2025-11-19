import { dataPlayers } from "./data";

const $topPlayerImg = document.getElementById('top-player-img');
const $topPlayerName = document.getElementById('top-player-name');
const $topPlayerPuntos = document.getElementById('top-player-puntos');
const $topPlayerKills = document.getElementById('top-player-kills');
const $topPlayerDefeat = document.getElementById('top-player-defeat');

const $tableBody = document.getElementById('table-body');

document.addEventListener('DOMContentLoaded', ()=>{
  const topPlayer = dataPlayers[0];

  $topPlayerImg.src = topPlayer.catImg;
  $topPlayerName.innerText = topPlayer.name;

  $topPlayerPuntos.innerText = topPlayer.puntos;
  $topPlayerKills.innerText = topPlayer.kills;
  $topPlayerDefeat.innerText = topPlayer.defeat;

  renderPlayersInTable(dataPlayers);
})

const renderPlayersInTable = (arrayPlayers)=>{
  for (let index = 0; index < arrayPlayers.length; index++) {
    const player = arrayPlayers[index];
    
    const trHTML = `
    <tr>
      <td class="table-rank"><p class="rounded-sm">${index + 1}</p></td>
      <td class="table-jugador">${player.name}</td>
      <td class="table-jugador hidden md:block">${player.elo}</td>
      <td class="table-puntos">${player.puntos}</td>
      <td class="table-kills">${player.kills}</td>
    </tr>
    `

    $tableBody.innerHTML += trHTML;
  }
}

const $adminName = document.querySelectorAll('.admin-id');
const $jugadorName = document.querySelectorAll('.jugador-name');

$adminName.forEach(e=>{
  e.addEventListener('click', (item)=>{
    copyText(item.target.innerText);
  })
})
$jugadorName.forEach(e=>{
  e.addEventListener('click', (item)=>{
    copyText(item.target.innerText);
  })
})

const copyText = (txt) => {
  navigator.clipboard.writeText(txt)
    .then(() => {
      alert("ID de jugador copiado");
    })
    .catch(err => {
      console.error("Error al copiar: ", err);
    });
}
