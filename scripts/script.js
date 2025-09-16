const SearchInput = document.querySelector('article input[type="search"]'); //varibale voor de input
const studenten = document.querySelectorAll('.mugshot.student'); //voor de filter systeem van de mugshots
const meerFotosKnop = document.querySelector('.meer-fotos'); //variable voor de meer foto's knop

// fucntie om te kijken of er 3 of 4 foto's word weergegeven
function getMaxVisible() {
  if (window.innerWidth <= 600) { 
    return 3;
  } else {
    return 4;
  }
}

function toonStandaard() {
  const maxVisible = getMaxVisible();

  studenten.forEach((student, index) => {
    if (index < maxVisible) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  });
}
// Ik roep hier de functie aan om te kijken hoeveel de index is
toonStandaard();

window.addEventListener('resize', toonStandaard);

SearchInput.addEventListener('input', function() {
  const filter = SearchInput.value.toLowerCase();

  studenten.forEach(student => {
    const nameEl = student.querySelector('figcaption p') || student.querySelector('p');
    const name = nameEl ? nameEl.textContent.toLowerCase() : '';

    if (name.includes(filter)) {
      student.style.display = '';
    } else {
      student.style.display = 'none';
    }
  });

  if (filter.length > 0) {
    meerFotosKnop.style.display = 'none';
  } else {
    meerFotosKnop.style.display = '';
    toonStandaard();
  }
});

let allesZichtbaar = false; //een boolean om te kunnen switchen van meer foto's en minder foto's
meerFotosKnop.addEventListener('click', () => {
    if (!allesZichtbaar) {
        studenten.forEach(student => student.style.display = '');
        meerFotosKnop.textContent = "Minder foto's";
        allesZichtbaar = true;
    } else {
        toonStandaard();
        meerFotosKnop.textContent = "Meer foto's";
        allesZichtbaar = false;
    }
});
