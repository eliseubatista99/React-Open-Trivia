import '../css/Trivia.css';
import {parseToHtml} from '../utils/Utils'

import Answer from './Answer';
export default function Question(props: any){

    const answersArray = props.item.answers

    const answersElements = answersArray.map((ans: any) => 
        <Answer 
            key={ans.id}
            gameOver={props.gameOver} 
            item={ans} 
            onAnswerSelected={() => props.onAnswerSelected(props.item.id, ans.id)}/>
        )

    return(
        <div className="Trivia--item">
            <h2 className="Trivia--question">{parseToHtml(props.item.question)}</h2>
            <div className="Trivia--all-answers">
                {answersElements}
            </div>
        </div>
    )
}