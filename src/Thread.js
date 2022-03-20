
function Thread({arr, func}){
	return (
		<div>
			{arr.map(
				(el, key) => <input 
				key={key} 
				value={el} 
				onChange={func}
				/>
			)}
		</div>
	)
}

export default Thread