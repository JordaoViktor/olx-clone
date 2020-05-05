import React from 'react';
import { Link } from 'react-router-dom';

const Page = () =>  {
  return (
      <>
        <div>Pagina Inicial</div>
        <Link to="/about">Sobre</Link>
      </>
  )
}

export default Page;