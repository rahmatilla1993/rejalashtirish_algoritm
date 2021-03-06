import 'bootstrap/dist/css/bootstrap.css';

function Thread({ arr, update }) {
	return (

		<div className="row">
			<div className="col-2 offset-5">
				<h2 className="text-center">Resurs bajarish vaqti</h2>
				{arr.map(
					(el, key) => <input
						className="from-control d-block mb-2"
						key={key}
						value={el}
						onChange={(e) => update(arr => [...arr.slice(0, key), isNaN(parseInt((e.target.value))) ? 0 : parseInt(e.target.value), ...arr.slice(key + 1)])}
					/>
				)}
				<button className="btn btn-success m-2" onClick={() => update(arr => [...arr, 1])}>+</button>
				<button className="btn btn-success m-2" onClick={() => update(arr => arr.length !== 1 ? [...arr.slice(0, -1)] : arr)}>-</button>
			</div>
		</div>
	)
}

export default Thread