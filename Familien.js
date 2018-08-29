import React from 'react';
import { shape, string } from 'prop-types';
import AnneKristine from './AnneKristine';
import Selbekk from './Selbekk';

const Familien = ({ rolleSelbekk = "pappa", rolleAnneKristine = "mamma" }) => {
  return (
    <React.Fragment>
      <Selbekk />
      <AnneKristine />
    </React.Fragment>
  )
};

Familien.propTypes = {
  rolleSelbekk: string.isRequired,
  rolleAnneKristine: string.isRequired,
}

export default Familien;
