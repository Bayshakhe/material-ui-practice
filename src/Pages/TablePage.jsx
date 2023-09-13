import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TablePage = () => {
  const contents = [
    { id: 1, name: "Mitul", phone: "4567899", email: "wry@gmail.com" },
    { id: 2, name: "Ratul", phone: "4567899", email: "wry@gmail.com" },
    { id: 3, name: "Putul", phone: "4567899", email: "wry@gmail.com" },
    { id: 4, name: "Shimul", phone: "4567899", email: "wry@gmail.com" },
  ];
  return (
    <Paper sx={{padding: "25px"}} variant="outlined">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.map((e) => (
              <TableRow key={e.id}>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.phone}</TableCell>
                <TableCell>{e.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TablePage;
