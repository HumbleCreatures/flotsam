export const ComponentToTest = ({message, doStuff}:{message:string, doStuff:(input:string)=>void}) => {
  return <button onClick={() => {doStuff(message)}}></button>
}
