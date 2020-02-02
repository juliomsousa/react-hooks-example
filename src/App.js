import React, { useState } from 'react';

function App() {
	const [techs, setTech] = useState([
		'Android - Java / Kotlin',
		'iOS - Obj C / Swift',
	]);
	const [newTech, setNewTech] = useState('');

	function handleAdd() {
		if (newTech.length > 0) {
			setTech([...techs, newTech]);
		}
	}

	function handleNewTech(e) {
		setNewTech(e.target.value);
	}

	return (
		<>
			<p>Hooks - useState</p>
			<ul>
				{techs.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
			<input value={newTech} onChange={handleNewTech} />
			<button type="button" onClick={handleAdd}>
				Adicionar
			</button>
		</>
	);
}

export default App;
