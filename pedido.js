function sim(t) {

  alert("Infelizmente n posso te dar um beijinho agr 😔, mas Te Amo Meu Amor")

}

function desviar(t) {
  var btn = t;
  btn.style.position = 'absolute';
  btn.style.top = posicaoAleatoria(10, 70);
  btn.style.left = posicaoAleatoria(10, 70);
  console.log("opa");
}

function posicaoAleatoria(min, max) {
  return (Math.random() * (min, max) + min) + "%";
}
