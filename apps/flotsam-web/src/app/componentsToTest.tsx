export const PropLogicComponentToTest = ({message}:{ message?:string }) => {
  if(message) {
    return <div>{message}</div>
  }

  return <><div>There is no message again</div><div>Middle message</div><div>Third message</div></>
}

export const EventComponentToTest = ({message, doStuff}:{message:string, doStuff:(input:string)=>void}) => {
  return <button onClick={() => {doStuff(message)}}></button>
}


