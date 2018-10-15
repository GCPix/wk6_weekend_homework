document.addEventListener('DOMContentLoaded',() =>{
/* DOMContentLoaded - stops anything else heppening till HTML is loaded*/
//add listenter to item with id so that it can see when the event happens //

//find the new-instrument-form id//
  const addInstrumentForm = document.querySelector('#add-instrument-form');
        addInstrumentForm.addEventListener('submit', handleFormSubmit)
        //what happens when submit is clicked//
        const deleteAllButton = document.querySelector('#delete-all');
        deleteAllButton.addEventListener('click', handleDeleteAllClick);
  });

  const handleDeleteAllClick = function (event) {
        const allInstruments = document.querySelector('#instrument-placement');
        allInstruments.innerHTML = ' ';

  };
  const handleFormSubmit = function(event) {

      event.preventDefault(); //still can't remember what this does but I know I need it
      //console.log(event.target.elements);
      // find place on page the data is to be input #instrument-placement
      const InstrumentListContent = document.querySelector('#instrument-placement')
      //get content together from the form that you want to appendChild
      const InstrumentListItem = createInstrument();
      //tell it where to put it
      InstrumentListContent.appendChild(InstrumentListItem);
      // clear the form
      event.target.reset();
      //document.add-instrument-form.instrumentText.focus();
  };

  createInstrument = function(){
        const div = document.createElement('div');
        div.classList.add('divFormat')

        image = URL.createObjectURL(event.target.instrumentPicture.files[0])
        instrument = event.target.instrumentText.value
        family = event.target.family.value
        commonClassification = event.target.commonClassification.value

        const img = document.createElement('img');
        div.appendChild(img);
        img.src = image;
        const p1 = document.createElement('p');
        div.appendChild(p1);
        p1.textContent = `Instrument Name: ${instrument}`
        const p2 = document.createElement('p')
        div.appendChild(p2);
        p2.textContent = `Instrument Family: ${family}`
        const p3 = document.createElement('p')
        div.appendChild(p3);
        p3.textContent = `Common Classification: ${commonClassification}`
        return div;


  };
