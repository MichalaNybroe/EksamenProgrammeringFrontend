const teamMap = new Map();

async function getTeams(dropdown) {
  const teams = await getFetch("https://eksamenbackend.azurewebsites.net/cyclingTeam");

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
