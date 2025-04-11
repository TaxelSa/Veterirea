import React, { useState } from "react";

function Componente() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calcular = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;
    let res;
    switch (operacion) {
      case "sumar":
        res = n1 + n2;
        break;
      case "restar":
        res = n1 - n2;
        break;
      case "multiplicar":
        res = n1 * n2;
        break;
      case "dividir":
        res = n2 !== 0 ? n1 / n2 : "Error: División por cero";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 p-6 rounded-1xl shadow-lg w-80 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Calculadora</h2>
      
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Ingrese el primer número"
        className="mb-2 p-2 bg-white border rounded-md w-full"
      />
      
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Ingrese el segundo número"
        className="mb-4 p-2 bg-white border rounded-md w-full"
      />

      <div className="grid grid-cols-2 gap-2 w-full">
        <button onClick={() => calcular("sumar")} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Sumar</button>
        <button onClick={() => calcular("restar")} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Restar</button>
        <button onClick={() => calcular("multiplicar")} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Multiplicar</button>
        <button onClick={() => calcular("dividir")} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Dividir</button>
      </div>

      {result !== null && <h3 className="mt-4 text-lg font-bold text-gray-700">Resultado: {result}</h3>}
    </div>
  );
}

export default Componente;