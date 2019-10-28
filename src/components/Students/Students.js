import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import {baseURL} from '../../constants/baseURL'


export default class Students extends Component {
     
    state= {
      //   data: [
      //   { name: 'Rein', surname: 'Op t Land', score: 17, status: 1, class: 34 },
      //   { name: 'Wouter', surname: 'De Vos', score: 10, status: 3, class: null},
      //   { name: 'Kelly', surname: 'Van Evert', score: 14, status: 2, class: null },
      //   { name: 'Arien', surname: 'Kock', score: 18, status: 1, class: 34 },
      //   { name: 'Gerson', surname: 'Lynch', score: 4, status: 3, class: null },
      //   { name: 'Esther', surname: 'Hayward', score: 12, status: 2, class: null },
      //   { name: 'Danny', surname: 'Van Der Jagt', score: 18, status: 1, class: 34 },
      //   { name: 'Zeger', surname: 'Vos', score: 16, status: 1, class: 33 },
      //   { name: 'Thomas', surname: 'De Witt', score: 11, status: 2, class: 35 },
      // ],
      columns: [
        { title: 'First Name', field: 'firstName',editable: 'never' },
        { title: 'Last Name', field: 'lastName',editable: 'never' },
        { title: "Username", field: 'username'},
        {title: "Email", field: "email"},
        {
          title: 'Status',
          field: 'status',
          lookup: { 1: 'Ready now', 2: 'Needs to revise', 3: 'Not ready' },
        },
        { title: 'Score', field: 'score', type: 'numeric'},
        { title: 'Class', field: 'classNumber', type: 'numeric'}
      ],
       options: {
        sorting: true,
        exportButton: true,
        rowStyle: rowData => ({
            backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
      } ,
      editable:{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                const data = this.props.data;
                const index = data.indexOf(oldData);
                data[index] = newData;
                this.setState({ data }, () => resolve());
              }
              resolve()
            }, 1000)
          }),
        },
        selectedRow: null
         }
   
    render() {
       
        return (
            <React.Fragment>
            
            <span className="spacer-lg"></span>
            <Container>
            <MaterialTable
                className="spacer"
                title="Bootcamp Candidates"
                columns={this.state.columns}
                data={this.props.data}        
                options={this.state.options} 
                editable={this.state.editable}
                onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                data={query =>
                 
                  new Promise((resolve, reject) => {
                    console.log("query is", query)
                    let url = `${baseURL}/user`
                    url += '?per_page=' + query.pageSize
                    url += '&page=' + (query.page + 1)
                    console.log("url changes", url)
                    fetch(url)
                      .then(response => response.json())
                      .then(result => {
                        console.log("result of the query is", result)
                        resolve({
                          data: result.data,
                          page: result.page - 1,
                          totalCount: result.total,
                        })
                      })
                  })}
            />
            <span className="spacer-lg"></span>
            </Container>
          </React.Fragment>
        )
    }
}
