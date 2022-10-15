import { QuestionData } from "../DataTypes";

export function logQuestion(question: QuestionData){
    console.log(`{
        category: ${question.category},
        type: ${question.type},
        difficulty: ${question.difficulty},
        question: ${question.question},
        answers: ${question.answers},
    }`)
}

export function parseToHtml(text: string){
    const parser = new DOMParser();
    const elem = parser.parseFromString(text, 'text/html');

    return elem.body.innerText;
}

export function shuffleArray(arrayToShuffle: Array<any>){
    let newArray = [...arrayToShuffle]

    for(let i=0;i<newArray.length;i++){
        const randomNumber = Math.floor(Math.random() * newArray.length);
        const swap = newArray[i];
        newArray[i] = newArray[randomNumber];
        newArray[randomNumber] = swap;
    }

    return newArray;
}

export const sleep = (millis : number) => new Promise(r => setTimeout(r, millis))