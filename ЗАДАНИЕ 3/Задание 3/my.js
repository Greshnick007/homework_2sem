function play() {
		let a1 = $("#a1").val(),
  b1 = $("#b1").val(),
  c1 = $("#c1").val(),
  a2 = $("#a2").val(),
  b2 = $("#b2").val(),
  c2 = $("#c2").val();
  
  let Delta = a1*b2 - a2*b1,
  Delta1 = a1*c2 - a2*c1,
  Delta2 = b1*c2 - c1*b2;
  if (Delta !== 0) {
	  let x1 = Delta1 / Delta,
	  x2 = Delta2 / Delta;
	  alert('Корень Х1:'+x1+' Корень Х2:'+x2);
	  console.assert(x1 == 0.2 && x2 == 0.1,  "Ошибка");
  } 
  else {
	  alert('Ошибка данных!');
  }
}