function txtSwap(x) {

  switch (x) {
    case 1:
      document.getElementById("one").style.display = "block";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      break;
    case 2:
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "block";
      document.getElementById("three").style.display = "none";
      break;

    case 3:
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "block";
      break;
  }
  x++;
}

const cardFilters = [];
cardFilters[0] = ".six";
cardFilters[1] = ".seven";
cardFilters[2] = ".eight";
cardFilters[3] = ".nine";

function ShowAll() {
  for (let i = 0; i < 4; i++) {
    $(cardFilters[i]).show();
  }
}


function ShowOne(x) {
  for (let i = 0; i < 4; i++) {
    $(cardFilters[i]).hide();
  }
  $(cardFilters[x]).show();
}
