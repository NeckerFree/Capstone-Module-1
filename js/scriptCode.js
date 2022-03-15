/**
 * Athletes Data
 */
const athletes=[];
athletes.push({
 id:1,
 name:'Eliud',
 profile:'Marathon runner',
records:'Fast Record',
photo:'ss',
})
/**
 * Templates
 */


/**
 * Selectors
 */
 var divAthletes=document.querySelector(".athletes");
/**
 * Functions
 */
function loadTopAthletes(quantity) {
  var outstandingAthletes = athletes.slice(0, quantity);
  var athleteSections = '';
  
  for (let index = 0; index < outstandingAthletes.length; index++) {
    const athlete = outstandingAthletes[index];
    var athleteSection=`<section class="row">
    <div class="col-4"><img src='${athlete.photo}' alt='${athlete.name}'>
      <div class="col-8">
        <h5>${athlete.name}</h5>
        <p class="profile">${athlete.profile}</p>
        <img src="" alt="left Line">
        <p class="records">${athlete.records}</p>
      </div>
    </div>
    </section>`;
    athleteSections= athleteSections.concat(athleteSection);
  }
  divAthletes.innerHTML=athleteSections;

};
/**
 * Events
 */
window.addEventListener('load', () => {
  loadTopAthletes(2);
});
