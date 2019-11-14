import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"



export default class AddQuestionForm extends Component {
	render() {
		const { onChange, onSubmit } = this.props
		const { questionContent, categoryId } = this.props.values

		return (
			<div className="background">
				<Container>
					<Card className="card-50 component-center">
						<CardContent>
							<Typography variant="h4"><b>Add a question</b></Typography>
							<br/>
							<form 
							onSubmit={onSubmit} 
							noValidate 
							autoComplete="off">
								{/* <Typography variant="subtitle1">Category </Typography> */}
								<FormControl
								    style={{minWidth: 100}}
									variant="outlined"
									label="Category"
									placeholder="Category"
								>
									<Select
										className="form-control"
										onChange={onChange}
										value={categoryId}
										name="categoryId"
									>
										<MenuItem value={0} key="Pick a category">
											{" "}
											Pick a category{" "}
										</MenuItem>
										<MenuItem value={1} key="Variables">
											{" "}
											Variables{" "}
										</MenuItem>
										<MenuItem value={2} key="Functions">
											{" "}
											Functions{" "}
										</MenuItem>
										<MenuItem value={3} key="Global">
											{" "}
											Global{" "}
										</MenuItem>
										<MenuItem value={4} key="Local">
											{" "}
											Local{" "}
										</MenuItem>
										<MenuItem value={5} key="Type Coercion">
											{" "}
											Type Coercion{" "}
										</MenuItem>
										<MenuItem value={6} key="Statements">
											{" "}
											Statements{" "}
										</MenuItem>
									</Select>
								</FormControl>
								<TextField
									id="outlined"
									label="Question"
									className="form-control-lg-textfield"
									multiline
									rows="4"
									onChange={onChange}
									margin="normal"
									variant="outlined"
									name="questionContent"
									value={questionContent}
								/>
								<CardActions style={{justifyContent: 'center'}}>
								<Button variant="contained" color="secondary">
								Add question
							  </Button>
								</CardActions>
							</form>
						</CardContent>
					</Card>
				</Container>
				<span className="spacer-lg"></span>
			</div>
		)
	}
}
