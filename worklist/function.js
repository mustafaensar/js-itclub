function finished(x) {
  let islem = x.filter(a => a.includes("(x)"));
  return islem;
}

function unfinished(x) {
  let islem = x.filter(a => !a.includes("(x)"));
  return islem;
}

function check(x) {
  let islem = x.every(a => a.includes("(x)"));
  return islem;
}