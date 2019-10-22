import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import StarHalfTwoToneIcon from '@material-ui/icons/StarHalfTwoTone';
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default class ListQuestions extends Component {
    render() {
        return (
            <div>
            
               <Container maxWidth="md">
               <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h4">Question 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                    </Typography>
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
                    <ListItemText primary="Level 1" />
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
                    <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                     sit amet blandit leo lobortis eget.
                    </Typography>
                    </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
               
                </Container>

            </div>
        )
    }
}
