const muscles = ["New", "Open", "Closed"]

const exercisesArray = [
	{
		id: "TKT-1001",
		title: "AIMS Login problem",
		description: "I amm unable to connect AIMS. Please resolve my issue",
		muscles: "AIMS(2)",
		request_date: "Jan 9, 2020"
	},
	{
		id: "TKT-1002",
		title: "Crew Document",
		description: "Document Management System is Giving Problem",
		muscles: "AIMS(2)",
		request_date: "Jan 9, 2020"
	}
	,
	
	{
		id: "TKT-1003",
		title: "AIMS Login problem",
		description: "I amm unable to connect AIMS. Please resolve my issue",
		muscles: "TMS(3)",
		request_date: "Jan 9, 2020"
	},
	{
		id: "TKT-1004",
		title: "Crew Document",
		description: "Document Management System is Giving Problem",
		muscles: "TMS(3)",
		request_date: "Jan 10, 2020"
	},
	{
		id: "TKT-1004",
		title: "Crew Document",
		description: "Document Management System is Giving Problem",
		muscles: "TMS(3)",
		request_date: "Jan 10, 2020"
	}
	
]

// gEB function turn exercises data into an enumeratable array below :
//  [['shoulders', [practice1, practice2,...]], ['arms',[practice1, practice2...], ...]
function getExercisesByMuscles(exercises) {
	console.log("exercises:", exercises)
	return Object.entries(
		exercises.reduce((accumulator, currentExercise) => {
			const { muscles } = currentExercise

			accumulator[muscles] = accumulator[muscles]
				? [...accumulator[muscles], currentExercise]
				: [currentExercise]

			// 				console.log("accumulator[muscles]:", accumulator[muscles])
			// 				console.log("accumulator: ", accumulator)

			return accumulator
		}, {})
	)
}

const exercisesKeyValueArray = getExercisesByMuscles(exercisesArray)

export { muscles, exercisesArray, getExercisesByMuscles }
