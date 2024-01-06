import React from 'react'

const CarsDetails = ({id,brand,color,newCar,km}) => {
  return (
    <>
    <h2>ID: {id}</h2>
    <h3>Marca: {brand}</h3>
    <p>Cor: {color}</p>
    <p>Novo: {newCar}</p>
    <q>KM: {km}</q>
    </>
  )
}

export default CarsDetails