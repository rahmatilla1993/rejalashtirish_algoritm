
function Thread({arr, func}){
	return (

		<div className="">
		<div className="">

			{arr.map(
				(el, key) => <input 
				className="from-control"
				key={key} 
				value={el} 
				onChange={func.bind(this, key)}
				/>
			)}
		</div>
		</div>
	)
}

export default Thread