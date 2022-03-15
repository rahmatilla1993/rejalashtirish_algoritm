import 'bootstrap/dist/css/bootstrap.css';

function Table2(props) {
	//console.log(props.values)
	return (
	<div>
	<h1 className="text-center" >{props.title}</h1>
	<table className="table table-responsive table-hover table-striped table-dark">
	<thead>
		<tr>
			<th>Name</th>
			{
				((n) => {
					let arr = []
					for(let i = 0; i < n; i++)
						arr.push(<th> {i} </th>)
					return arr
				})(props.values[0].length-1)
			}
		</tr>
	</thead>
	<tbody>
		{props.values.map(
			(item) => {
				return (
				<tr>
					{item.map(
						(el) => {
							return (<td>{el}</td>)
						}
					)}
				</tr>
				)}
		)}
	</tbody>
	</table>
	</div>
	);
}

export default Table2;