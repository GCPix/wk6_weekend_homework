everything is wrapped in an event listener.

The listener looks for DOMContentLoaded, when it see it it starts to run the callback?

ABOVE the listener we need to declare the variable that the listener will be looking for.  the variable will hold the position in the document that we are looking at.

const variable = document.querySelector('#id'); the id is either written directly into the html or must be declared above using document.body.classList.add('className');

The listener that looks for the actual item being changed
  The listener here will be in the format variable.addEventListener('event', functionWithEventActions);

_______________________________________________________________________________
_______________________________________________________________________________
Within the HTML we add ids to the specific items we want to find in the HTML to do something under.  the id will be on the level above the one I want to create/edit.

note: the function variable name ties to the name at the bottom the page
  const functionWithEventActions = function(){
    if it is a form we want to use event.preventDefault(); we need this because without it the page will reload (form submit will send a post request which redirects to the page) and we wouldn't get to see the changes on screen.  

    // find place on page the data is to be input #instrument-placement
      const WhereItemWillGo = document.querySelector('#id')
    //get content together from the form that you want to appendChild
      const Content = createContent();
    //tell it where to put it
      WhereItemWillGo.appendChild(Content);
    // clear the form
      event.target.reset();
    };

    createContent(){
      creating tags:
        var1 = document.createElement('html')
        html could be p, h1, div, table etc
        if you want to append other tags within var1 you would:
        var2 = document.createElement('html')
        var1.appendChild('var2')
        var3 = document.createElement('html')
        var1.appendChild('var3')

      You may need to add classes, this is done using
        element.classList.add('idName');

      You also need content:


      return var1
    };

order of items within the initial listener:


    towards the top of the initial listener you need the function that actually tells the computer what needs to be done when the eventListener sees what it is looking for.




___________________________________________________________________________________
___________________________________________________________________________________
