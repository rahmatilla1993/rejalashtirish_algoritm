import 'bootstrap/dist/css/bootstrap.css';

function Table(props) {
	return (<table className="table table-striped">
		<thead>
			<tr>
				<th>Jarayon nomi</th>
				<th>Kelish vaqti</th>
				<th>Talab vaqti</th>
				<th>Prioritet</th>
			</tr>
		</thead>
		<tbody>
			{props.values.map(
				(item, ind) => {
					return (<tr>
						<td><input className="form-control" value={item.name} readOnly /></td>
						<td><input className="form-control" value={item.begin} onChange={(e) => props.changing(e, ind, 'begin')} /></td>
						<td><input className="form-control" value={item.resource} onChange={(e) => props.changing(e, ind, 'resource')} /></td>
						<td><input className="form-control" value={item.priority} onChange={(e) => props.changing(e, ind, 'priority')} /></td>
					</tr>
					)
				}
			)}
		</tbody>
	</table>
	);
}

export default Table;