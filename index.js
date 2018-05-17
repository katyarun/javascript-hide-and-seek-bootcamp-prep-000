function getFirstSelector(selector) {
  return document.querySelector(selector);  
}

function nestedTarget() {
  return document.getElementById("nested");
}

function increaseRankBy(n) {
  const arr = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = parseInt(arr[i].innerHTML) + n;
  }
}

function deepestChild() {
  
}
