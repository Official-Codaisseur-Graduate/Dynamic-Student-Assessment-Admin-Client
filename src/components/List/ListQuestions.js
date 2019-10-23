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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ListQuestions extends Component {
    render() {
        return (
            <div>
               <Container maxWidth="md">
                <span className="spacer-lg"></span>
               <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h4">Question 1</Typography>
                    <Typography className="secondary-heading">Question snippit</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Suspendisse malesuada lacus ex,
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
                    <Typography variant="h5" gutterBottom>
                     Category
                    </Typography>
                    <form className="form-control">
                    <FormControl required className="form-control">
                    <InputLabel  >Javascript Category</InputLabel>
                    <Select className="form-control">
                    <MenuItem value="" disabled>
                        <em>Pick a category</em>
                    </MenuItem>
                    <MenuItem value={1}>Objects</MenuItem>
                    <MenuItem value={2}>Arrays</MenuItem>
                    <MenuItem value={3}>Variables</MenuItem>
                    <MenuItem value={4}>Functions</MenuItem>
                    <MenuItem value={5}>Methods</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    </form>
                    </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <span className="spacer"></span>
                    <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h4">Question 2</Typography>
                    <Typography className="secondary-heading">Question snippit</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Suspendisse malesuada lacus ex,
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
                    <ListItemText primary="Level 2" />
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
                    <form className="form-control">
                    <FormControl required className="form-control">
                    <InputLabel  >Javascript Category</InputLabel>
                    <Select className="form-control">
                    <MenuItem value="" disabled>
                        <em>Pick a category</em>
                    </MenuItem>
                    <MenuItem value={1}>Objects</MenuItem>
                    <MenuItem value={2}>Arrays</MenuItem>
                    <MenuItem value={3}>Variables</MenuItem>
                    <MenuItem value={4}>Functions</MenuItem>
                    <MenuItem value={5}>Methods</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    </form>
                    </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <span className="spacer"></span>
                    <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h4">Question 3</Typography>
                    <Typography className="secondary-heading">Question snippit</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Typography>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Suspendisse malesuada lacus ex,
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
                    <ListItemText primary="Level 3" />
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
                    <form className="form-control">
                    <FormControl required className="form-control">
                    <InputLabel  >Javascript Category</InputLabel>
                    <Select className="form-control">
                    <MenuItem value="" disabled>
                        <em>Pick a category</em>
                    </MenuItem>
                    <MenuItem value={1}>Objects</MenuItem>
                    <MenuItem value={2}>Arrays</MenuItem>
                    <MenuItem value={3}>Variables</MenuItem>
                    <MenuItem value={4}>Functions</MenuItem>
                    <MenuItem value={5}>Methods</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    </form>
                    </Grid>
                    </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <span className="spacer-lg"></span>
                </Container>

            </div>
        )
    }
}
