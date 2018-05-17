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
  var array = document.querySelectorAll("#grand-node")[0];
  var criteriaFn = (xx => xx.children.length === 0);
  
  return find(array, criteriaFn);
}

function find(array, criteriaFn) {
  let current = array;
  let next = [];
 
  while (current) {
    if (criteriaFn(current)) {
      // console.log("answer is child with innerHTML:" + current.innerHTML);
      return current;
    }
 
      for (let i = 0; i < current.children.length; i++) {
        next.push(current.children[i]);
        // console.log(next);
      }
      // console.log(" ");
    
    current = next.shift();
    // console.log(current);
    console.log(next);
  }
 
  return null
}
