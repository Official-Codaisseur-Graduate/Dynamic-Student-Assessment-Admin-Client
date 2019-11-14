import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default class Students extends Component {

	columns = [
		{ id: 'id', label: 'Id', minWidth: 140 },
		{ id: 'email', label: 'Email Id', minWidth: 170 },
		{ id: 'code', label: 'Code', minWidth: 100 },
		{ id: 'status', label: 'Status', minWidth: 100 }
	]

	useStyles = makeStyles({
		root: {
			width: '100%',
		},
		tableWrapper: {
			maxHeight: 440,
			overflow: 'auto',
		},
	});

	render() {
		// const rows = this.props.students.rows
		// const classes = this.useStyles
		// const [page, setPage] = React.useState(0);
		// const [rowsPerPage, setRowsPerPage] = React.useState(10);

		// const handleChangePage = (event, newPage) => {
		// 	setPage(newPage);
		// };

		// const handleChangeRowsPerPage = event => {
		// 	setRowsPerPage(+event.target.value);
		// 	setPage(0);
		// };

		return (
			<Paper >
				<div >
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{this.columns.map(column => (
									<TableCell
										key={column.id}
										style={{ minWidth: column.minWidth }}
									> {column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{!this.props.students.rows && "Loading.."}
							{this.props.students.rows && this.props.students.rows.map(row => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{this.columns.map(column => {
											const value = row[column.id]
											return (
												<TableCell key={column.id}>
													{value}
												</TableCell>
											)
										})}
									</TableRow>
								)
							})}
						</TableBody>
					</Table>

				</div>

				{/* <TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={this.props.students.rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page',
					}}
					nextIconButtonProps={{
						'aria-label': 'next page',
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage} >
				</TablePagination> */}
			</Paper>
		)
	}
}


// import React from 'react'

// export default function Students() {
// 	return (
// 		<div>

// 		</div>
// 	)
// }
