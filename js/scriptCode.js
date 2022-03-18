/**
 * Athletes Data
 */
const athletes = [];
athletes.push({
  id: 1,
  name: 'Eliud Kipchoge',
  profile: 'The greatest marathon runner in history and leading light in the NN Running Team, it is impossible to not admire the achievements and inspirational qualities of this extraordinary athlete.',
  records: 'Eliud Kipchoge’s 1:59:40 in Vienna isn’t on the list from 2019. That time doesn’t count for record purposes because standard competition rules for pacing and fluids weren’t followed.',
  photo: './images/Eliud.jpg',
});
athletes.push({
  id: 2,
  name: 'Paula Radcliffe',
  profile: 'Paula Radcliffe was born in Northwich, Cheshire, in 1973, but grew up in Bedford. She joined Bedford and County Athletics Club at the age of 11 and competed at the World Cross Country Championships at 16.',
  records: 'She is a three-time winner of the London Marathon (2002, 2003, 2005), three-time New York Marathon champion (2004, 2007, 2008), and 2002 Chicago Marathon winner.',
  photo: './images/Paula Radcliffe.jpg',
});
athletes.push({
  id: 3,
  name: 'Brigit Kosgei',
  profile: 'Brigid Jepchirchir Kosgei (born 20 February 1994) is a Kenyan marathon runner who won the 2018 and 2019 Chicago Marathons, the 2019 and 2020 London Marathons and the 2021 Tokyo Marathon.',
  records: 'Kenya’s world record holder and Olympic silver medallist Brigid Kosgei will defend her London Marathon title in this year’s race on 3 October.',
  photo: './images/Brigit Kosgei.jpg',
});
athletes.push({
  id: 4,
  name: 'Kenenisa Bekele',
  profile: 'Ethiopian long-distance runner who won Olympic gold medals in the 10,000 metres in 2004 and in both the 5,000 metres and the 10,000 metres in 2008. He later had success in the marathon',
  records: 'During this period of unprecedented distance dominance, he smashed six world records and had world record marks for the 5000m (12:37.35) and 10,000m (26:17.53)',
  photo: './images/Kenenisa Bekele.jpg',
});
athletes.push({
  id: 5,
  name: 'Mary Keitany',
  profile: 'Mary Jepkosgei Keitany (born 18 January 1982) is a Kenyan former professional long distance runner. She is the world record holder in a women-only marathon, having won the 2017 London Marathon in a time of 2:17:01. As of November 2019, she sits third all-time at both the marathon and half marathon.',
  records: 'Marathon runner Mary Keitany has brought her illustrious career to a close. Keitany came fourth at the London 2012 Olympic Games but went on to win the New York marathon four times and is the current world record holder for a women-only marathon. She also won gold at the 2009 World Half Marathon Championships.',
  photo: './images/Mary Keitany.jpg',
});
athletes.push({
  id: 6,
  name: 'Mo Farah',
  profile: 'Mo Farah, in full Sir Mohamed Muktar Jama Farah, (born March 23, 1983, Mogadishu, Somalia), Somalian-born British distance runner who won gold medals in both the 5,000-metre and 10,000-metre races at the 2012 London Olympics and the 2016 Rio de Janeiro Olympics.',
  records: 'Sir Mo Farah’s infamous Olympic double-double was completed at the Rio 2016 Games, successfully defending the 5,000m and 10,000m gold medals he had first achieved at London 2012 for Team GB.',
  photo: './images/Mo Farah.jpg',
});
/**
 * Templates
 */

/**
 * Selectors
 */
const divAthletes = document.querySelector('.athletes');
const buttonMore = document.querySelector('.moreAthletes');
const menuButton = document.querySelector('.first-button');
const animatedIcon = document.querySelector('.animated-icon1');

/**
 * Functions
 */
function loadTopAthletes(quantity) {
  const outstandingAthletes = athletes.slice(0, quantity);
  let athleteSections = '';

  for (let i = 0; i < outstandingAthletes.length; i += 1) {
    const athlete = outstandingAthletes[i];
    const athleteSection = `<section>
    <div class="person" ><div class="groupImage" ><img class="backImage" src='${athlete.photo}' alt='${athlete.name}'></div>
    <div class="athleteSection">
    <h6>${athlete.name}</h6><p class="profile">${athlete.profile}</p><div class="iconLeft" alt="left Line"></div>
    <p class="records">${athlete.records}</p></div></section>`;
    athleteSections = athleteSections.concat(athleteSection);
  }
  if (document.body.contains(divAthletes)) {
    divAthletes.innerHTML = athleteSections;
  }
}
/**
 * Events
 */
window.addEventListener('load', () => {
  loadTopAthletes(2);
});
if (document.body.contains(buttonMore)) {
  buttonMore.addEventListener('click', () => {
    loadTopAthletes(6);
    buttonMore.style.disabled = true;
  });
}

menuButton.addEventListener('click', () => {
  animatedIcon.classList.toggle('open');
});
