let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

//JOGADOR 1  -----------------------------------------------------------------------

document.getElementById("BtnJogador1Mais1").onclick = function(){
    contador1 += 1;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

document.getElementById("BtnJogador1Menos1").onclick = function(){
    contador1 -= 1;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

document.getElementById("BtnJogador1Mais5").onclick = function(){
    contador1 += 5;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

document.getElementById("BtnJogador1Menos5").onclick = function(){
    contador1 -= 5;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

document.getElementById("BtnJogador1Zerar").onclick = function(){
    contador1 = 0;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

document.getElementById("BtnJogador1Resetar").onclick = function(){
    contador1 = 40;
    document.getElementById("LabelMarcadorJogador1").innerHTML = contador1;
}

//ROLAGEM DE DADOS JOGADOR 1

document.getElementById("1btnIMGd20").onclick = function(){
    let numero = Math.floor(Math.random() * 20)+1;
    document.getElementById("1LabelD20").innerHTML = numero;

}

document.getElementById("1btnIMGd6").onclick = function(){
    let numero = Math.floor(Math.random() * 6)+1;
    document.getElementById("1LabelD6").innerHTML = numero;

}


//JOGADOR 2   -----------------------------------------------------------------------

document.getElementById("BtnJogador2Mais1").onclick = function(){
    contador2 += 1;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

document.getElementById("BtnJogador2Menos1").onclick = function(){
    contador2 -= 1;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

document.getElementById("BtnJogador2Mais5").onclick = function(){
    contador2 += 5;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

document.getElementById("BtnJogador2Menos5").onclick = function(){
    contador2 -= 5;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

document.getElementById("BtnJogador2Zerar").onclick = function(){
    contador2 = 0;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

document.getElementById("BtnJogador2Resetar").onclick = function(){
    contador2 = 40;
    document.getElementById("LabelMarcadorJogador2").innerHTML = contador2;
}

//ROLAGEM DE DADOS JOGADOR 2

document.getElementById("2btnIMGd20").onclick = function(){
    let numero = Math.floor(Math.random() * 20)+1;
    document.getElementById("2LabelD20").innerHTML = numero;

}

document.getElementById("2btnIMGd6").onclick = function(){
    let numero = Math.floor(Math.random() * 6)+1;
    document.getElementById("2LabelD6").innerHTML = numero;

}

//JOGADOR 3   ----------------------------------------------------------------------- 

document.getElementById("BtnJogador3Mais1").onclick = function(){
    contador3 += 1;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

document.getElementById("BtnJogador3Menos1").onclick = function(){
    contador3 -= 1;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

document.getElementById("BtnJogador3Mais5").onclick = function(){
    contador3 += 5;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

document.getElementById("BtnJogador3Menos5").onclick = function(){
    contador3 -= 5;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

document.getElementById("BtnJogador3Zerar").onclick = function(){
    contador3 = 0;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

document.getElementById("BtnJogador3Resetar").onclick = function(){
    contador3 = 40;
    document.getElementById("LabelMarcadorJogador3").innerHTML = contador3;
}

//ROLAGEM DE DADOS JOGADOR 3

document.getElementById("3btnIMGd20").onclick = function(){
    let numero = Math.floor(Math.random() * 20)+1;
    document.getElementById("3LabelD20").innerHTML = numero;

}

document.getElementById("3btnIMGd6").onclick = function(){
    let numero = Math.floor(Math.random() * 6)+1;
    document.getElementById("3LabelD6").innerHTML = numero;

}

//JOGADOR 4  -----------------------------------------------------------------------

document.getElementById("BtnJogador4Mais1").onclick = function(){
    contador4 += 1;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

document.getElementById("BtnJogador4Menos1").onclick = function(){
    contador4 -= 1;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

document.getElementById("BtnJogador4Mais5").onclick = function(){
    contador4 += 5;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

document.getElementById("BtnJogador4Menos5").onclick = function(){
    contador4 -= 5;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

document.getElementById("BtnJogador4Zerar").onclick = function(){
    contador4 = 0;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

document.getElementById("BtnJogador4Resetar").onclick = function(){
    contador4 = 40;
    document.getElementById("LabelMarcadorJogador4").innerHTML = contador4;
}

//ROLAGEM DE DADOS JOGADOR 4

document.getElementById("4btnIMGd20").onclick = function(){
    let numero = Math.floor(Math.random() * 20)+1;
    document.getElementById("4LabelD20").innerHTML = numero;

}

document.getElementById("4btnIMGd6").onclick = function(){
    let numero = Math.floor(Math.random() * 6)+1;
    document.getElementById("4LabelD6").innerHTML = numero;

}
