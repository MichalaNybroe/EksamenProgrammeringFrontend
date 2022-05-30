//Initial load
const cyclistsByTeamDD = document.querySelector('#cyclistsByTeamInput');
const teamcreateDD = document.querySelector('#teamCreate');
const moreInfobutton = document.querySelector('#moreInfo');

moreInfobutton.onclick = () => {
  window.location.href = 'more.html';
};

getTeams(cyclistsByTeamDD);
getTeams(teamcreateDD);

displayAllCyclists(showAllUrl);
