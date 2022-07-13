import React from 'react';
import styled from 'styled-components';
import Table from './UI/Table';

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

  table {
    border-spacing: 0;
    background-color: white;
    border-bottom: 2px solid ${tableGreen};
    border-radius: 8px 8px 0 0;
    width: 80%;
    margin: 1rem auto;
    box-shadow: 0px -8px 8px 8px ${tableBgGrey};

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
      text-align: left;
    }

    th {
      background-color: ${tableGreen};
      color: white;
      font-weight: 700;
      :first-child {
        border-radius: 8px 0 0 0;
      }
      :last-child {
        border-radius: 0 8px 0 0;
      }
    }
  }
`;

const UsersTable = () => {
  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
};

export default UsersTable;
