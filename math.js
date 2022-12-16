console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

function calcularAlturaTriangulo(lado1, base){
  if (lado1 == base){
    console.warn('Este no es un triangulo isosceles');
  } else {
    //h = raiz cuadrada (lado1**2 - (b**2) / 4)
    return Math.sqrt( (lado1 **2) - ((base ** 2) / 4 ) )
  }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
  const Semiperimetro = (a + b + c ) /2 ;

  if (a == b || a == c || b == c) {
      console.warn('Este no es un triangulo escaleno.')
  }
  else {
      H = ((2/a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro - b) * (Semiperimetro - c))));
      console.log('La altura "H" = ' + H) ;
  }
}


console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

console.group ('circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log ({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
})

function CalcilarCirculo (radio) {
  const diametro = radio + 2;
  const radioAlCuadrado = Math.pow(radio,2);
  
  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI,
  }
}

console.groupEnd('circle')

