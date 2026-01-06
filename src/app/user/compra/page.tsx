'use client'

import { useState } from 'react'

export default function CompraPage() {
  const [step, setStep] = useState(1)
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  
  const steps = [
    { num: 1, title: 'Elección de número' },
    { num: 2, title: 'Método de pago' },
    { num: 3, title: 'Validación de pago' },
    { num: 4, title: 'Pago procesado' },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Barra de progreso */}
      <div className="mb-10">
        <div className="flex justify-between mb-4">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2
                ${step >= s.num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {s.num}
              </div>
              <span className="text-sm">{s.title}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Contenido del paso */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Paso 1: Elige tus números</h2>
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    if (selectedNumbers.includes(num)) {
                      setSelectedNumbers(selectedNumbers.filter(n => n !== num))
                    } else {
                      setSelectedNumbers([...selectedNumbers, num])
                    }
                  }}
                  className={`h-12 rounded-lg border-2 flex items-center justify-center font-medium
                    ${selectedNumbers.includes(num)
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'border-gray-300 hover:border-blue-400'}`}
                >
                  {num}
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <div>
                <p className="text-gray-600">Números seleccionados: {selectedNumbers.length}</p>
                <p className="font-semibold">Total: ${selectedNumbers.length * 5}</p>
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={selectedNumbers.length === 0}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50"
              >
                Continuar
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Paso 2: Método de pago</h2>
            {/* Formulario de pago */}
            <button onClick={() => setStep(3)}>Simular pago</button>
          </div>
        )}
        
        {/* Añadir steps 3 y 4 según necesidad */}
      </div>
    </div>
  )
}