const teamMap = new Map();

async function getTeams(dropdown) {
  const teams = await getFetch("http://localhost:8080/cyclingTeam");

  teams.forEach(team => {
    teamMap.set(team.id, team);

    dropdown.appendChild(createOption(team.id, team.name));
  })
}

function createOption(id, name) {
  const option = document.createElement('option');

  option.innerText = name;
  option.value = id;

  return option;
}
