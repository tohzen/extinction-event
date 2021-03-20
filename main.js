const lineThru = document.querySelectorAll('ol');

for (const li of lineThru) {
    li.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = "line-through";
    });
}

const sneaky = document.querySelectorAll('ul');

for (const li of sneaky) {
    li.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = "0" ;
        
    });
}

const hidey = document.querySelectorAll('img');

for (const pics of hidey) {
    pics.addEventListener('click', function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.width = "0";
    });
}

const kill = document.querySelector('#destroy-all');

const destroyEverything = function() {
  for (const listItem of firstListItems) {
    listItem.style.textDecoration = 'line-through';
  }

  for (const listItem of secondListItems) {
    listItem.style.opacity = 0;
  }

  for (const picture of pictures) {
    picture.style.width = '0px';
  }
}


kill.addEventListener('click', destroyEverything);