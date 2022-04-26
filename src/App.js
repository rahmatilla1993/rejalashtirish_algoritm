import {
  useState,
  useEffect
} from 'react'
import Table from './Table'
import Table2 from './Table2'
//import solveSimple from './Algorithm/main'
//import solveByPriority from './Algorithm/main1'

//import solveByStep from './Algorithm/main2'
import First from './Algorithm/First'
import 'bootstrap/dist/css/bootstrap.css'
import Thread from './Thread'

function App(props) {
  const [myArr,
    setArr] = useState(props.arr);
  const [show,
    setShow] = useState(false);
  const [n,
    setN] = useState(1);
  const [tk,
    setTk] = useState([1]);
  const [dev,
    setDev] = useState(false);
  function changing(e, index, type) {
    setArr(myArr.map(
      (val, ind) => {
        //alert(e.target.value)
        if (index === ind) {
          val[type] = e.target.value
          if(isNaN(parseInt(val[type]))) {
            val[type] = '0'
          }
          else {
            val[type] = parseInt(val[type]);
          }
          return val
        }
        return val
      }
    ))
  }
  useEffect(() => setShow(false), [myArr, tk, n, dev]);
  function add(e) {
    const lastLetter = myArr[myArr.length-1].name
    if (lastLetter === 'y') {
      e.target.className += " disabled"
    }
    e.target.nextSibling.className = "btn btn-primary col-3 mt-5 mb-5"
    setArr((arr) => [...arr, {
      name: String.fromCharCode(lastLetter.charCodeAt()+1),
      begin: 1,
      resource: 1,
      priority: 1
    }])
  }

  function remove(e) {
    const lastLetter = myArr[myArr.length-1].name
    if (lastLetter === 'b') {
      e.target.className += " disabled"
    }
    e.target.previousSibling.className = "btn btn-primary col-3 mt-5 mb-5"
    setArr((arr) => [...arr.slice(0, arr.length-1)])
  }


  return (
    <div className="container">
		<div className="row justify-content-between">
			<h1 className="text-center text-primary"> Akmalov K </h1>
			<Table values={myArr} changing={changing} />

			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={() => setShow(true)}>run</button>
			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={add}>add</button>
			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={remove}>remove</button>
    </div>
    <h2 className="text-center">P</h2>
    <input className="form-control" value={n} onChange={e => setN(n => isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))} />
		<Thread arr={tk} update={setTk/*I am not a senior*/} />
    {show && <Table2 values={First(myArr, tk, n, dev)} title="birinci" />}
    
    <input type="checkbox" value={dev} onChange={() => setDev(!dev)}/>
    </div>
  )

}

export default App;