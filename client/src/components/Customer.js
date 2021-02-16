import React, { Fragment } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){//render는 return이 있는 형식임
        return(
            <Fragment>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src ={this.props.image} alt="profile"/> </TableCell>
                    <TableCell>{this.props.name} </TableCell>
                    <TableCell>{this.props.birthday} </TableCell>
                    <TableCell>{this.props.gender} </TableCell>
                    <TableCell>{this.props.job} </TableCell>
                </TableRow>
            </Fragment>
        )
    }
}

export default Customer;
