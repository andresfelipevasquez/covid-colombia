import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ToFormatNumber from '../services/ToFormatNumber';

const DepartmentTable = ({rows}) => {

    return(
        <TableContainer className="departmanet-table" component={Paper}>
            <Table size="small" stickyHeader aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Departamento</TableCell>
                        <TableCell>Casos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow key={row.departamento}>
                            <TableCell component="th" scope="row">{row.departamento}</TableCell>
                            <TableCell align="right">{ToFormatNumber(row.COUNT_id_de_caso)}</TableCell>
                        </TableRow>                        
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}

export default DepartmentTable;