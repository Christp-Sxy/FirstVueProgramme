function getId(id) {
  return document.getElementById(id);
}

function getEle(pid, ele) {
  return getId(pid).getElementsByTagName(ele);
}