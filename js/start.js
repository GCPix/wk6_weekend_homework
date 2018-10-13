document.addEventListener('DOMContentLoaded',() =>{
/* DOMContentLoaded - stops anything else heppening till HTML is loaded*/
    console.log('page loaded');

//what happens when submit is clicked//
    const handleNewInstrumentFormSubmit = function() {
      event.preventDefault();
  //still can't remember what thi does but I know I need it


  // find place on page the data is to be input #instrument-placement

      const InstrumentListContent = document.querySelector('#instrument-placement')
  //get content together from the form that you want to appendChild
    const InstrumentListItem = createInstrument();
  //tell it where to put it
      InstrumentListContent.appendChild(InstrumentListItem);
      event.target.reset();
    };

createInstrument = function(){
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    div.appendChild(p1);
    p1.textContent = `Instrument Name: ${event.target.instrumentText.value}`
    const p2 = document.createElement('p')
    div.appendChild(p2);
    p2.textContent = `Instrument Family: ${event.target.family.value}`
    const p3 = document.createElement('p')
    div.appendChild(p3);
    p3.textContent = `Common Classification: ${event.target.commonClassification.value}`
    return div;
};

//find the new-instrument-form id//
const addInstrumentForm = document.querySelector('#add-instrument-form');

//add listenter to item with id so that it can see when the event happens //
addInstrumentForm.addEventListener('submit', handleNewInstrumentFormSubmit);




});
