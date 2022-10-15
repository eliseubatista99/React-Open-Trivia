export interface AnswerData {
    id: string,
    answer: string, 
    isCorrect: boolean,
    isSelected: boolean
}

export interface QuestionData{
    id: string,
    category: string, //Integer
    type: string, //String
    difficulty: string, //String
    question: string, //String
    answers: AnswerData[], //Array of strings
}