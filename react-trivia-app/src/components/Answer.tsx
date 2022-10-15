import '../css/Trivia.css'
import { parseToHtml } from '../utils/Utils'

export default function Answer(props: any){
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

    if(props.gameOver){
        if(props.item.isSelected){
            style = props.item.isCorrect? correctStyle : incorrectStyle
        }else{
            style = props.item.isCorrect? correctStyle : normalStyle
        }      
    }
    else{
        style = props.item.isSelected? selectedStyle : normalStyle
    }

    return (
        <div className="Trivia--answer" style={style} onClick={props.onAnswerSelected}>
            <p>{parseToHtml(props.item.answer)}</p>
        </div>
    )
}