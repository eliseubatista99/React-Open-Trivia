import '../css/Trivia.css';

import React from "react"
import { nanoid } from 'nanoid'
import Question from './Question'
import {shuffleArray, sleep} from '../utils/Utils'

import LoadingSpinner from './LoadingSpinner'


async function fecthDataFromApi(){
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const jsonResponse = await response.json();
    //const success = jsonResponse.response_code;
    const results = jsonResponse.results;

    const questions = results.map(result => {

        let answers = result.incorrect_answers.map(ans => 
        { 
            return{
                id: nanoid(),
                answer: ans,
                isCorrect: false,
                isSelected: false
            }
        })

        answers.push(
            {
                id: nanoid(),
                answer: result.correct_answer,
                isCorrect: true,
                isSelected: false
            }
        )

        answers = shuffleArray(answers)

        return {
            id: nanoid(),
            category: result.category, //Integer
            type: result.type, //String
            difficulty: result.difficulty, //String
            question: result.question, //String
            answers: answers, //Array of strings
        }
    })

    return questions;
}

export default function Trivia(){

    function onAnswerSelected(questionID, answerID){        
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions]

            //For each question
            for(let i=0;i<newQuestions.length;i++){
                //If we find the question with the clicked answer
                if(newQuestions[i].id === questionID){
                    const newAnswers = [...newQuestions[i].answers]
                    
                    for(let j=0;j<newAnswers.length;j++){
                        newAnswers[j] = {
                            ...newAnswers[j],
                            isSelected: newAnswers[j].id === answerID
                        }
                        console.log(newAnswers[j])
                    }

                    newQuestions[i] = {
                        ...newQuestions[i],
                        answers: newAnswers
                    }

                }
            }


            return newQuestions;
        })
    }

    async function onCheckAnswers(){
        //If the game is over, play again
        if(gameOver)
        {
            await getNewQuestions();
            setGameOver(false)
        }
        //Otherwise, show the results
        else 
        {
            let count = 0;
            for(let i=0;i<questions.length;i++){
                for(let j=0;j<questions[i].answers.length;j++){
                    const answer = questions[i].answers;

                    if(answer[j].isSelected && answer[j].isCorrect){
                        count++;
                    }
                }
            }
            setCorrectAnswers(count)
            setGameOver(true)
        }
    }

    async function getNewQuestions(){
        setIsFetching(true);
        const result = await fecthDataFromApi();
        await sleep(1000)
        setQuestions(result);
        console.log("Fecthed data");
        setIsFetching(false);
    }

    const [isFetching, setIsFetching] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [gameOver, setGameOver] = React.useState(false)
    const [correctAnswers, setCorrectAnswers] = React.useState(0)

    React.useEffect(() => function(){
        getNewQuestions()
    }, [])

    const questionElements = questions.map(question => {
        return <Question key={question.id} gameOver={gameOver} item={question} onAnswerSelected={onAnswerSelected} />
    })

    return(
        <div className="Trivia">
            {
                isFetching? 
                <>
                    <LoadingSpinner />
                </> :
                <>
                    <div className="Trivia--list">
                        {questionElements}
                    </div>
                    <div className="Trivia--check-answers">
                        {gameOver && <p>{`You scored ${correctAnswers}/${questions.length} correct answers`}</p>}
                        <button onClick={onCheckAnswers}>{gameOver? "Play Again" : "Check Answers"}</button>
                    </div>
                </>
            }
            
        </div>
    )
}