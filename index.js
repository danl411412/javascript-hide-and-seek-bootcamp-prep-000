function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var ranks = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(var i = 0; i < ranks.length; i++) {
    var x = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = x + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}
