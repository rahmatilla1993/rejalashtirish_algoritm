
function Thread({arr, update}){
	return (

		<div className="">
		<div className="">
      <h2 className="text-center">TK</h2>
			{arr.map(
				(el, key) => <input 
				className="from-control d-block"
				key={key} 
				value={el} 
				onChange={(e) => update(arr => [...arr.slice(0, key), /\d+/.test(e.target.value) ? parseInt(e.target.value) : arr[key], ...arr.slice(key+1)])}
				/>
			)}
			<button className="btn btn-success" onClick={() => update(arr => [...arr, 1])}>+</button>
			<button className="btn btn-success" onClick={() => update(arr => arr.length !== 1 ? [...arr.slice(0, -1)] : arr)}>-</button>
		</div>
		</div>
	)
}

export default Thread