const showAll = document.querySelector('#showAllCyclists');
const showAllUrl = 'https://eksamenbackend.azurewebsites.net/cyclist';
const showByTeam = document.querySelector('#showAllCyclistsByTeam');
const showByTeamUrl = 'https://eksamenbackend.azurewebsites.net/cyclist?sort=team';
const showTeamForm = document.querySelector('#displayAllCyclistsByTeamForm');
const showByTime = document.querySelector('#showAllCyclistsByTime');
const showByTimeUrl = 'https://eksamenbackend.azurewebsites.net/cyclist?sort=time';

const table = document.querySelector('#table')

showAll.addEventListener('click', () => {
  displayAllCyclists(showAllUrl)
});

showByTeam.addEventListener('click', () => {
  displayAllCyclists(showByTeamUrl)
});

showByTime.addEventListener('click', () => {
  displayAllCyclists(showByTimeUrl)
});
showTeamForm.addEventListener('submit', displayByTeam);

async function displayAllCyclists(url) {
  const cyclists = await getFetch(url);

  fillCyclistTable(cyclists);
}

async function displayByTeam(event) {
  event.preventDefault();

  const teamId = cyclistsByTeamDD.options[cyclistsByTeamDD.selectedIndex].value;
  const team = teamMap.get(parseInt(teamId));

  const cyclists = await getFetch('https://eksamenbackend.azurewebsites.net/cyclingTeam/' + team.name + '/cyclist')

  await fillCyclistTable(cyclists);
}


function fillCyclistTable(list) {
  table.innerHTML = '';

  createCyclistTableHeader();

  list.forEach(cyclist => table.appendChild(inputCyclistDataInTable(cyclist)));
}
