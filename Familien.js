import React from 'react';
import { node, string } from 'prop-types';
import AnneKristine from './AnneKristine';
import Selbekk from './Selbekk';

const Familien = ({ rolleSelbekk = "pappa", rolleAnneKristine = "mamma", children }) => {
  return (
    <React.Fragment>
      <Selbekk />
      <AnneKristine />
      { children }
    </React.Fragment>
  )
};

Familien.propTypes = {
  rolleSelbekk: string.isRequired,
  rolleAnneKristine: string.isRequired,
  children: node.isRequired,
}

export default Familien;
