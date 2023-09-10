import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/gmail/v1/users/me/messages',
          {
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual access token
            },
            params: {
              maxResults: 10, // Fetch only the first 10 emails
            },
          }
        );

        const emailList = response.data.messages;
        const formattedEmails = await Promise.all(
          emailList.map(async (email) => {
            const emailResponse = await axios.get(
              `https://www.googleapis.com/gmail/v1/users/me/messages/${email.id}`,
              {
                headers: {
                  Authorization: ``, // Replace with your actual access token
                },
              }
            );

            const content = emailResponse.data.snippet;
            return {
              mail_ID: email.id,
              content: content,
            };
          })
        );

        setEmails(formattedEmails);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Mail ID</TableCell>
            <TableCell className="tableCell">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emails.map((row) => (
            <TableRow key={row.mail_ID}>
              <TableCell className="tableCell">{row.mail_ID}</TableCell>
              <TableCell className="tableCell">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
