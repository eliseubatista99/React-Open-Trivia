export function logQuestion(question: any){
    console.log(`{
        category: ${question.category},
        type: ${question.type},
        difficulty: ${question.difficulty},
        question: ${question.question},
        correct_answer: ${question.correct_answer},
        incorrect_answers: ${question.incorrect_answers},
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