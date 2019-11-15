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

	state = {
		page: 0,
		rowsPerPage: 5
	}

	columns = [
		{ id: 'id', label: 'Id', minWidth: 140 },
		{ id: 'email', label: 'Email Id', minWidth: 170 },
		{ id: 'code', label: 'Code', minWidth: 100 },
		{ id: 'status', label: 'Status', minWidth: 100 }
	]

	classes = makeStyles({
		root: {
			width: '100%',
		},
		tableWrapper: {
			maxHeight: 440,
			overflow: 'auto',
		},
	})

	handleChangePage = (event, newPage) => {
		this.setState({
			page: newPage
		})
	}

	handleChangeRowsPerPage = (event) => {
		this.setState({
			rowsPerPage: +event.target.value,
			page: 0
		})
	}

	render() {
		// console.log("props??", this.props)

		return (
		<div>
			<Paper className={this.classes.root}>
				<div className={this.classes.tableWrapper}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>{
									this.columns.map(column => (
									<TableCell
										key={column.id}
										style={{ minWidth: column.minWidth }}
									>{
										column.label
										}</TableCell>
								))
								}</TableRow>
						</TableHead>
						<TableBody>{
								!this.props.students.rows ? "Loading..." : (
								this.props.students.rows.slice(this.state.page*this.state.rowsPerPage, this.state.page*this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>{
										this.columns.map(column => {
											const value = row[column.id];
											return (
												<TableCell key={column.id}>{value}</TableCell>
											)
										})
									}</TableRow>
								)
							}))
							}</TableBody>
					</Table>

				</div>

				<TablePagination
					rowsPerPageOptions={[5, 10, 25, 100]}
					component="div"
					count={parseInt(this.props.students.total)}
					rowsPerPage={this.state.rowsPerPage}
					page={this.state.page}
					backIconButtonProps={{
						'aria-label': 'previous page',
					}}
					nextIconButtonProps={{
						'aria-label': 'next page',
					}}
					onChangePage={this.handleChangePage}
					onChangeRowsPerPage={this.handleChangeRowsPerPage} >
				</TablePagination>
			</Paper>
		</div>
		)
	}
}


