import React from "react"
import { Header, Footer } from "./layout"
import Exercises from "./Exercises"
import {
	muscles as musclesList,
	exercisesArray,
	getExercisesByMuscles
} from "./store"

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			exercisesArray: exercisesArray,
			currentExercise: {},
			category: ""
		}
	}

	// setState of category according to <Footer> <Tabs> onChange() triggered
	handleCategorySelected = (e, i) => {
		let selectedCategory = i === 0 ? "" : musclesList[i - 1]
		this.setState({ category: selectedCategory })
	}

	handleExerciseSelected = id => {
		console.log(id)
		this.setState(
			(state, props) => {
				return {
					currentExercise: state.exercisesArray.find(ex => {
						console.log("currentEx:", ex)
						return ex.id === id
					})
				}
			},
			() => {
				console.log("component get updated")
			}
		)
	}

	handleExerciseCreated = exercise => {
		console.log("handleExerciseSelected received: ", exercise)
		this.setState(({ exercisesArray }) => ({
			exercisesArray: [...exercisesArray, exercise]
		}))
	}

	render() {
		const { category, exercisesArray, currentExercise } = this.state
		const allExercises = getExercisesByMuscles(exercisesArray)
		console.log("currentExercise: ", currentExercise)

		return (
			<div>


				<Header
					onExerciseCreate={this.handleExerciseCreated}
					musclesList={musclesList}
				/>
								<Footer
					musclesList={musclesList}
					handleCategorySelected={this.handleCategorySelected}
					category={category}
				/>


				<Exercises
					currentExercise={currentExercise}
					category={category}
					allExercises={allExercises}
					handleExerciseSelected={this.handleExerciseSelected}
				/>

				
			</div>
		)
	}
}
