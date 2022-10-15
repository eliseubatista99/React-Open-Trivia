import '../css/Trivia.css';
import {parseToHtml} from '../utils/Utils'

import { QuestionData } from '../DataTypes';

import Answer from './Answer';
export default function Question(props: any){

    const {
        gameOver, 
        item, 
        onAnswerSelected
     } : {
        gameOver: boolean,
        item: QuestionData,
        onAnswerSelected: any
     } = props

    const answersArray = item.answers

    const answersElements = answersArray.map(ans => 
        <Answer 
            key={ans.id}
            gameOver={gameOver} 
            item={ans} 
            onAnswerSelected={() => onAnswerSelected(props.item.id, ans.id)}/>
        )

    return(
        <div className="Trivia--item">
            <h2 className="Trivia--question">{parseToHtml(item.question)}</h2>
            <div className="Trivia--all-answers">
                {answersElements}
            </div>
        </div>
    )
}