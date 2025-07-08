import { useRef } from "react"


export default function Validinput(){
    // const [list,setList]=useState([]);
    // const [inputvalue,setInputValue]=useState();
    const inputref=useRef(null);

    const updateList=(e:HTMLFormElement)=>{
        e.preventDefault();
        console.log(inputref.current);
    }
    return (
        <div>
            <h1>Input</h1>
            <form onSubmit={(e)=>{e.preventDefault();updateList(e.target as any);}}>
                <input type="number" className="bg-gray-300 p-4" ref={inputref} />
                <button type="submit" className="p-2 bg-green-300">Submit</button>
            </form>
            
        </div>
    )
}