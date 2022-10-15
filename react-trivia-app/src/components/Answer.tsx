import '../css/Trivia.css'
import { parseToHtml } from '../utils/Utils'

import { AnswerData } from '../DataTypes';

export default function Answer(props: any){

    const {
        gameOver, 
        item, 
        onAnswerSelected
     } : {
        gameOver: boolean,
        item: AnswerData,
        onAnswerSelected: any
     } = props


    const normalStyle = {
        backgroundColor: "#FFFFFF"
    }

    const selectedStyle = {
        backgroundColor: "#D6DBF5"
    }

    const correctStyle = {
        backgroundColor: "#94D7A2"
    }

    const incorrectStyle = {
        backgroundColor: "#F8BCBC"
    }

    let style = normalStyle;

    if(gameOver){
        if(item.isSelected){
            style = item.isCorrect? correctStyle : incorrectStyle
        }else{
            style = item.isCorrect? correctStyle : normalStyle
        }      
    }
    else{
        style = item.isSelected? selectedStyle : normalStyle
    }

    return (
        <div className="Trivia--answer" style={style} onClick={onAnswerSelected}>
            <p>{parseToHtml(item.answer)}</p>
        </div>
    )
}