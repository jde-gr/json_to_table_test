import React, { useState } from 'react';
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
      min-width: 100px;
      :first-child {
        border-radius: 8px 0 0 0;
        min-width: 50px;
      }
      :last-child {
        border-radius: 0 8px 0 0;
        min-width: 300px;
      }
    }

    tbody tr:hover {
      background-color: ${tableBgGrey} !important;
    }

    tbody tr:hover td {
      color: ${tableGreen};
      font-weight: 700;
    }
  }

  table + div {
    margin: 0.5rem auto;
    width: 80%;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem auto;
    border-radius: 6px;
    color: ${tableGreen};
    border: 1px solid ${tableGreen};
    box-sizing: border-box;
  }
`;

// const clickedUserData = data.map((user) => ({ ...user }));

const UsersTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const clickHandler = (event, userId) => {};

  const filterByNameHandler = (event) => {
    setFilteredData(
      data.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(event.target.value) ||
          user.lastName.toLowerCase().includes(event.target.value)
        );
      })
    );
  };

  const filterHandler = (event) => {
    setFilteredData(
      data.filter((user) => {
        const value = event.target.value;
        return (
          user.firstName.toLowerCase().includes(value) ||
          user.lastName.toLowerCase().includes(value) ||
          user.emailAddress.toLowerCase().includes(value) ||
          user.userId.toString().includes(value) ||
          user.phoneNumber.toString().includes(value)
        );
      })
    );
  };

  return (
    <Styles>
      <Table columns={columns} data={filteredData} />
      <div>
        <input
          type='text'
          placeholder='Filtrar por nombre'
          onChange={filterByNameHandler}
        />
        <input
          type='text'
          placeholder='Filtrar por cualquier campo'
          onChange={filterHandler}
        />
      </div>
    </Styles>
  );
};

export default UsersTable;
