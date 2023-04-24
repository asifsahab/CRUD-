// BookingList.js
import React from 'react';
import { Table } from 'antd';

const BookingList = ({ bookings }) => {
  const columns = [
    {
      title: 'Booking ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Father Name',
        dataIndex: 'fatherName',
        key: 'fatherName',
      },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    // Add more columns as needed
  ];

  return (
    <Table dataSource={bookings} columns={columns} />
  );
};

export default BookingList;
