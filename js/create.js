const createUrl = 'http://localhost:8080/cyclist';

const firstnameCreate = document.querySelector('#firstName');
const middlenameCreate = document.querySelector('#middleName');
const lastnameCreate = document.querySelector('#lastName');
const ageCreate = document.querySelector('#age');
const nationalityCreate = document.querySelector('#nationality');
const timeCreate = document.querySelector('#time');
const mountainCreate = document.querySelector('#mountainP');
const spurtCreate = document.querySelector('#spurtP');
const teamCreateDropdown = document.querySelector('#teamCreate');
const formCreate = document.querySelector('#createCyclistForm');

const messageDiv = document.querySelector('#messageDiv');

formCreate.addEventListener('submit', createCyclist);

function createCyclist(event) {
  event.preventDefault();

  const teamId = teamCreateDropdown.options[teamCreateDropdown.selectedIndex].value;
  const team = teamMap.get(parseInt(teamId));

  const body = {
    firstName: firstnameCreate.value,
    middleName: middlenameCreate.value,
    lastName: lastnameCreate.value,
    age: ageCreate.value,
    nationality: nationalityCreate.value,
    totalTime: timeCreate.value,
    mountainPoints: mountainCreate.value,
    spurtPoints:spurtCreate.value,
    cyclingTeam: team
  }

  postPutFetch('POST', createUrl, body).then(() => {
    messageDiv.removeAttribute('hidden')
    setTimeout(() => messageDiv.setAttribute('hidden', true), 3000);
    displayAllCyclists(showAllUrl);
  });
}
