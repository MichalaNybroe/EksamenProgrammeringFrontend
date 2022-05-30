const back = document.querySelector('#back');

back.onclick = () => {
  window.location.href = 'index.html';
}

loadMorePage();

function loadMorePage() {
  loadShirt();

  loadTeamCompetition();

  loadCountry();

}

function inputContentByCheckMiddleName(ptag, cyclist, data) {
  if (cyclist.middleName != null) {
    ptag.textContent = cyclist.firstName + ' ' + cyclist.middleName + ' ' + cyclist.lastName + ' ' + data;
  } else {
    ptag.textContent = cyclist.firstName + ' ' + cyclist.lastName + ' ' + data;
  }
}

async function loadShirt() {
  const yellowPtag = document.querySelector('#yellow');
  const mountainPtag = document.querySelector('#mountain');
  const greenPtag = document.querySelector('#green');
  const whitePtag = document.querySelector('#white');

  const listByTime = await getFetch('http://localhost:8080/cyclist?sort=time');
  const cyclist = listByTime[0];
  inputContentByCheckMiddleName(yellowPtag, cyclist, cyclist.totalTime);

  const mpcyclistList = await getFetch('http://localhost:8080/cyclist?sort=mountain');
  const mpcyclist = mpcyclistList[0];
  inputContentByCheckMiddleName(mountainPtag, mpcyclist, mpcyclist.mountainPoints)

  const spcyclistList = await getFetch('http://localhost:8080/cyclist?sort=spurt');
  const spcyclist = spcyclistList[0];
  inputContentByCheckMiddleName(greenPtag, spcyclist, spcyclist.spurtPoints);

  const ageList = await getFetch('http://localhost:8080/cyclist?sort=ageTime');
  const ageCyclist = ageList[0];
  inputContentByCheckMiddleName(whitePtag, ageCyclist, ageCyclist.totalTime);
}

async function loadTeamCompetition() {

  // get list of teams who have the five best players
  // insert team names into div as p tags
}

async function loadCountry() {
  // get list of countries who are doing best and insert in div

}

