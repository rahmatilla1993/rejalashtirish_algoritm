import {
	useState
} from 'react'
import Table from './Table'
import Table2 from './Table2'
import solveSimple from './Algorithm/main'
import solveByPriority from './Algorithm/main1'
import solveByStep from './Algorithm/main2'
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {
	let [myArr, setArr] = useState(props.arr);
	let [show, setShow] = useState(false);
	let [n, setN] = useState(1);

	function changing(e, index, type) {
		//alert(e.target.value + " " + index + " " + type)
		setShow(false)
		setArr(myArr.map(
			(val, ind) => {
				if (index === ind) {
					val[type] = e.target.value
					return val
				}
				return val
			}
		))
	}
	
	function add(e){
		setShow(false)
		const lastLetter = myArr[myArr.length-1].name
		if(lastLetter === 'y'){
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
	
	function remove(e){
		setShow(false)
		const lastLetter = myArr[myArr.length-1].name
		if(lastLetter === 'b'){
			e.target.className += " disabled"
		}
		e.target.previousSibling.className = "btn btn-primary col-3 mt-5 mb-5"
		setArr((arr) => [...arr.slice(0, arr.length-1)])
	}
	
	return (
		<div className="container">
		<div className="row justify-content-between">
			<h1 className="text-center"> good bye world :) </h1>
			<Table values={myArr} changing={changing} />
			<label for="step">step</label>
		<input id="step"
			className="form-control"
			value={n}
			onChange={(e) => { setShow(false); setN(e.target.value)}}
			/>
			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={() => setShow(true)}>run</button>
			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={add} >add</button>
			<button className="btn btn-primary col-3 mt-5 mb-5" onClick={remove} >remove</button>
		</div>
		{show && (<div>
		<Table2 values={solveSimple(myArr)} title="oddiy" />
		<br />
		<Table2 values={solveByPriority(myArr)} title="priyaritet bo'yica" />
		<br />
		<Table2 values={solveByStep(myArr, n)} title="qadam" />
			</div>
		)
			}
		</div>
	)

}

export default App;