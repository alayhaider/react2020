import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import CreateDialog from "../Exercises/Dialogs/create"

const styles = {
	root: {
		flexGrow: 1
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
}

function ButtonAppBar(props) {
	const { classes, onExerciseCreate } = props
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="static">
			
				<Toolbar>
		 
		 
			<Typography
						variant="headline"
						color="inherit"
						className={classes.flex}					>
					PIA - Service Call Management 			
					</Typography>

					
					

					<CreateDialog
						onCreate={onExerciseCreate}
						musclesList={props.musclesList}
					/>
				</Toolbar>
			</AppBar>
		</div>
	)
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
