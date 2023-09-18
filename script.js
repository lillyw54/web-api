
	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

var myQuestions = [
	{
		question: "What is JavaSctipt?",
		answers: {
			a: 'A cookie',
			b: 'Programming language',
			c: 'Starbucks JavaChip Frape',
            d: 'Script from the mummies'
		},
	},
	{
		question: "Containers for storing information in JavaScript is called a:",
		answers: {
			a: 'Container',
			b: 'Variable',
			c: 'Block',
            d: 'All of the above'
		},
		
	},
    {
		question: "Which of the following is the correct about the features of JavaScript?",
		answers: {
			a: 'JavaScript is a lightweight, interpreted programming language.',
			b: 'JavaScript is designed for creating network-centric applications.',
			c: 'JavaScript is complimentary to and integrated with Java.',
            d: 'All of the above'
		},
	
	},
];

var answers = ["b", "b", "d"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    
}