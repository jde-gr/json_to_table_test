import React from 'react';
import styled from 'styled-components';

import data from '../data/data.json';

const columns = Object.keys(data[0] || []).map((field) => ({
  Header: field.charAt(0).toUpperCase() + field.slice(1),
  accessor: field,
}));

console.log('Columns:');
console.log(columns);

const tableGreen = '#01987A';
const tableBgGrey = '#F3F3F3';

const Styles = styled.div`
  padding: 1rem;
`;

const UsersTable = () => {
  return (
    <Styles>
      <div>UsersTable</div>
    </Styles>
  );
};

export default UsersTable;
