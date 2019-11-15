import React, { Component } from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import StarHalfTwoToneIcon from "@material-ui/icons/StarHalfTwoTone"
import AssessmentTwoToneIcon from "@material-ui/icons/AssessmentTwoTone"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone"
import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone"
import Button from "@material-ui/core/Button"

class ListQuestions extends Component {
	render() {
		console.log("the questions are", this.props.questions)
		const questions = this.props.questions
		return (
			<div>
				<span className="spacer-lg"></span>
				<Container>
					{questions.length === 0 && (
						<Typography variant="h3">Loading...</Typography>
					)}
					{questions.map(question => (
						<span>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<Typography variant="h6">Question {question.id}</Typography>
									<Typography className="secondary-heading">
										{question.questionContent}
									</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Grid container spacing={3}>
										<Grid item xs={12}>
											<Typography variant="h5" className="question">
												{question.questionContent}
											</Typography>
											<div>
											</div>
										</Grid>
										<Grid item xs={12}>
											<Typography>Answers</Typography>
											<Grid item xs={12} md={6}>
												<div>
													<List>
														{question.answers.map(answer => (
															<ListItem key={answer.id}>
																<ListItemIcon>
																	<span>
																		{answer.correct === false && (
																			<CloseTwoToneIcon className="text-red" />
																		)}
																		{answer.correct === true && (
																			<CheckTwoToneIcon className="text-green" />
																		)}
																	</span>
																</ListItemIcon>
																<ListItemText primary={answer.answerContent} />
															</ListItem>
														))}
													</List>
												</div>
											</Grid>
										</Grid>
										<Grid item xs={6}>
											<Typography variant="h5" gutterBottom>
												Information
											</Typography>
											<List component="nav" aria-label="main mailbox folders">
												<ListItem button>
													<ListItemIcon>
														<StarHalfTwoToneIcon />
													</ListItemIcon>
													<ListItemText primary={question.initialLevel} />
												</ListItem>
												<ListItem button>
													<ListItemIcon>
														<AssessmentTwoToneIcon />
													</ListItemIcon>
													<ListItemText primary="50% of students got this correct" />
												</ListItem>
											</List>
										</Grid>
										<Grid item xs={6}>
											<Typography variant="h5" gutterBottom>
												Category
											</Typography>
											<Typography gutterBottom>
												{question.category.topic}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography variant="h5" gutterBottom>
												Edit Question
											</Typography>
											
											<Typography gutterBottom>
												<Button type="submit"
													size="medium"
													color="secondary"
													variant="contained"
													// onClick={}
												>
													Edit
											</Button>
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography variant="h5" gutterBottom>
												Delete Question
											</Typography>
											
											<Typography gutterBottom>
												<Button type="submit"
													size="medium"
													color="secondary"
													variant="contained"
													onClick={() => this.props.onClick(question.id)}
												>
													Delete
											</Button>
											</Typography>
										</Grid>
									</Grid>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<span className="spacer"></span>
						</span>
					))}
				</Container>
			</div>
		)
	}
}

export default ListQuestions


