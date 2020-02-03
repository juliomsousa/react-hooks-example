import React, { useState, useEffect } from 'react';

function App() {
	const [techs, setTech] = useState([]);
	const [newTech, setNewTech] = useState('');

	function handleAdd() {
		if (newTech.length > 0) {
			setTech([...techs, newTech]);
			setNewTech('');
		}
	}

	function handleNewTech(e) {
		setNewTech(e.target.value);
	}

	// componentDidMount()
	useEffect(() => {
		const storageTech = localStorage.getItem('techs');

		if (storageTech) {
			setTech(JSON.parse(storageTech));
		}
	}, []);

	// componentDidUpdate()
	useEffect(() => {
		localStorage.setItem('techs', JSON.stringify(techs));
	}, [techs]);

	// componentWillUnmount()
	useEffect(() => {
		return () => {
			// remove listeners and so on
		};
	}, []);

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
