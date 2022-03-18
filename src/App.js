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
	
	
	let [myArr,
		setArr] = useState(props.arr);
	let [show,
		setShow] = useState(false);
	let [n,
		setN] = useState(1);
	
	console.log("Hello");

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

	return (
		<div className="container">
		<div>
			<h1 className="text-center"> NodeJs React :) </h1>
			<Table values={myArr} changing={changing} />
			<label for="step">step</label>
		<input id="step"
			className="form-control"
			value={n}
			onChange={(e) => { setShow(false); setN(e.target.value)}}
			/>
			<button className="btn btn-primary" onClick={() => setShow(true)}>run</button>
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
