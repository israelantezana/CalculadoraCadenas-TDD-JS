export function sumarCadena(cadena) {
  const numeros = cadena.split(",");
  let total = 0;
  numeros.forEach((numeroCadena) => {
    total = total + Number(numeroCadena);
  });
  return total;
}
