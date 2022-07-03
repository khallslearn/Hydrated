
document.querySelector('button').addEventListener('click', waterDaily)


let water = 0

function waterDaily(weight) {
weight = document.querySelector('input').value
water = weight / 2
cup = water / 8
document.getElementById("Result").innerText= `It is recommeneded that you drink ${water} ounces  or ${cup} cups of water daily`
console.log(water)
  }

 