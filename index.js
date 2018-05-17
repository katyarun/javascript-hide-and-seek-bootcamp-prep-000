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


function find(array, criteriaFn) {
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      console.log("answer is " + current);
      return current;
    }
 
    
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
        console.log(next);
      }
      console.log(" ");
    
    current = next.shift();
    console.log(next);
  }
 
  return null
}


// criteria : children.length === 0