notes for Johns coffee app.

index.html
create the main html page.  we need to add a script tag that points to the js file.

lets get the form in place first.

the form will have three input elements, country of origin, quality score and washed/natural.
each element needs a label with a for and an input with a type and id as well as a name. the for in label refers to the id in the input.  name is required in cases where we have a post route (REST)

when you are using radio buttons each element int he radio button last must have the same name but they will each have their own id

type could be text, number, radio



querySelector can search for anything you ask it to but you have to use the css nomenclature

within the form we always want preventDefault within JS we would always use this in  a form.
