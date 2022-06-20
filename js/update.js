const teamsDD = document.querySelector('#teamUpdate');

const firstnameUpdate = document.querySelector('#firstName');
const middlenameUpdate = document.querySelector('#middleName');
const lastnameUpdate = document.querySelector('#lastName');
const ageUpdate = document.querySelector('#age');
const nationalityUpdate = document.querySelector('#nationality');
const timeUpdate= document.querySelector('#time');
const mountainUpdate = document.querySelector('#mountainP');
const spurtUpdate = document.querySelector('#spurtP');
const teamUpdateDropdown = document.querySelector('#teamUpdate');
const formUpdate = document.querySelector('#updateCyclistForm');
const cancel = document.querySelector('#cancel');

//setup page
fillUpdateWithCyclist();

formUpdate.addEventListener('submit', sendUpdate);

cancel.onclick = () => {
  window.location.href = '../index.html';
}

// metoder
async function fillUpdateWithCyclist() {
  await getTeams(teamsDD);

  const cyclist = await getFetch('https://eksamenbackend.azurewebsites.net/cyclist/' + getUrlId());

  // Input value
  firstnameUpdate.value = cyclist.firstName;
  middlenameUpdate.value = cyclist.middleName;
  lastnameUpdate.value = cyclist.lastName;
  ageUpdate.value = cyclist.age;
  nationalityUpdate.value = cyclist.nationality;
  timeUpdate.value = cyclist.totalTime;
  mountainUpdate.value = cyclist.mountainPoints;
  spurtUpdate.value = cyclist.spurtPoints;
  teamUpdateDropdown.value = cyclist.cyclingTeam.id;
}

async function sendUpdate(event) {
  event.preventDefault();

  const body = {
    firstName: firstnameUpdate.value,
    middleName: middlenameUpdate.value,
    lastName: lastnameUpdate.value,
    age: ageUpdate.value,
    nationality: nationalityUpdate.value,
    totalTime: timeUpdate.value,
    mountainPoints: mountainUpdate.value,
    spurtPoints: spurtUpdate.value,
    cyclingTeam: {id: teamUpdateDropdown.options[teamUpdateDropdown.selectedIndex].value}
  }
  await postPutFetch('PUT', 'https://eksamenbackend.azurewebsites.net/cyclist/' + getUrlId(), body);

  window.location.href = '../index.html';
}


// Get url from path
function getUrlId() {
  const string = window.location.search;
  const urlParam = new URLSearchParams(string);
  return urlParam.get('id');
}
