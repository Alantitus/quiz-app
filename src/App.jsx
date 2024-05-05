import { useState } from 'react'
import './App.css'

function App() {
  const [showFinalResults, setFinalResults] = useState(false)
  const [score,setScore]=useState(0)
  const [curQuestion,setCurQuestion]=useState(0)
  const questions = [
    {
      text: "Which of the following methods can be used to display data in some form using Javascript?",
      options: [
        { id: 0, text: "document.write()", isCorrect: false },
        { id: 1, text: "console.log()", isCorrect: false },
        { id: 2, text: "window.alert()", isCorrect: false },
        { id: 3, text: "All of the above ", isCorrect: true },
      ],
    },
    {
      text: "Which of the following keywords is used to define a variable in Javascript?",
      options: [
        { id: 0, text: "var", isCorrect: false },
        { id: 1, text: "let", isCorrect: false },
        { id: 2, text: "Both A and B", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "How can a datatype be declared to be a constant type?",
      options: [
        { id: 0, text: "const", isCorrect: true },
        { id: 1, text: "var", isCorrect: false },
        { id: 2, text: "let", isCorrect: false },
        { id: 3, text: "constant", isCorrect: false },
      ],
    },
    {
      text: "What keyword is used to check whether a given property is valid or not?",
      options: [
        { id: 0, text: "in", isCorrect: true },
        { id: 1, text: "is in", isCorrect: false },
        { id: 2, text: "exists", isCorrect: false },
        { id: 3, text: "lies", isCorrect: false },
      ],
    },
    {
      text: "Which function is used to serialize an object into a JSON string in Javascript?",
      options: [
        { id: 0, text: "stringify()", isCorrect: true },
        { id: 1, text: "parse()", isCorrect: false },
        { id: 2, text: "convert()", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];

  const optionClicked=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
    if(curQuestion+1<questions.length){
    setCurQuestion(curQuestion+1)
  }else{
    setFinalResults(true)
  }
}
const restartGame=()=>{
    setScore(0);
    setCurQuestion(0);
    setFinalResults(false)
}
  return (
  
  <div className='container bg-gradient-to-r  from-indigo-500 to-blue-200 w-full h-screen'>
      <h1 className='text-6xl font-["Neue_Montreal"] uppercase text-center text-white pt-10 font-semibold'>Quiz App</h1>

      {showFinalResults ?
     <div className='flex justify-center items-center h-4/5'>
        <div className='text-center bg-zinc-100 w-2/5 rounded-xl h-2/5'>
           <h1 className=' font-semibold text-3xl m-5'>Final Results</h1>
           <h1 className='text-4xl  font-semibold'>{score} out of {questions.length} correct - ({(score/questions.length)*100}%)</h1>
           <button className='bg-emerald-500 text-white rounded-xl p-3 w-20 font-semibold m-5' onClick={()=>restartGame()}>Restart</button>
         </div>
     </div>
       :
      <div className='flex justify-center items-center h-4/5'>
        <div className="bg-zinc-100 w-2/5 h-5/7 rounded-xl">
          <h1 className='text-center mt-5 font-semibold text-2xl'>Question {curQuestion+1} out of {questions.length}</h1>
          <h1 className='m-10 text-2xl font-semibold text-blue-950'>
         {questions[curQuestion].text}
          </h1>
          <div className='text-center pb-10'>
            {questions[curQuestion].options.map((option)=>{
                return(
                  <button onClick={()=>optionClicked(option.isCorrect)}  className='btn hover:bg-emerald-500 bg-blue-500 rounded-lg p-5 w-3/4 mb-5 text-white font-semibold text-xl' key={option.id}>{option.text}</button>
)
            })}
           
          </div>
        </div>
      </div>
      
      }
  </div>
     
  )
}

export default App
