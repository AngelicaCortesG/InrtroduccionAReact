import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import Badge from 'react-bootstrap/Badge';

const Footer = () => {
  return (
    <div className="App-footer">Imágenes de Perritos Felices
    <Badge  bg="warning" text="dark" size="md">By Angélica Cortés</Badge>{' '}
      </div>
    
  )
}

export default Footer