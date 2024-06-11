import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BoxRecords = () => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/fish-box-records/daily-report')
      .then(response => {
        console.log('Data fetched:', response.data);
        setRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Fish Box Records</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Box ID</TableCell>
              <TableCell>Fisher Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Auction Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length > 0 ? (
              records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.boxId}</TableCell>
                  <TableCell>{record.fisherName}</TableCell>
                  <TableCell>{record.weight}</TableCell>
                  <TableCell>{new Date(record.auctionDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">No records found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default BoxRecords;
