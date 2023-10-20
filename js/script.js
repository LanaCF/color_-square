const doc = document;
const btn = doc.querySelector('.btn');
const b1 = doc.querySelector('.b1');
const b2 = doc.querySelector('.b2');
const t1 = doc.querySelector('.t1');
const t2 = doc.querySelector('.t2');

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
b1.style.background = colors[0];
let i = 0;
let r = colors.length;


showColorPrev();
showColorNext();

t1.onclick = function() {
  showColorPrev();
}

t2.onclick = function() {
  showColorNext();
}

function showColorPrev() {
  b1.style.background = colors[r];
  r--;
  console.log(r);
  if (r == -1) {
    r = colors.length - 1;
  }
}

function showColorNext() {
  b2.style.background = colors[i];
  i++;

  if (i >= colors.length) {
    i = 0;
  }
}



