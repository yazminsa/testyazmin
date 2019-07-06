import React from 'react';
import styles from './App.module.scss';
import Input from './components/Input/Input';
import Board from './Board/Board';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		friends: {
			title: 'Friends',
			items: [ 'Miriam', 'Dulce Maria', 'Vicente', 'Liz', 'Rosamar' ],
			index: 0,
			input: {
				add: '',
				remove: ''
			}
		},
		cities: {
			title: 'Cities',
			items: [ 'Bangkok', 'Manila', 'Cairo', 'Ottawa', 'Hong Kong' ],
			index: 0,
			input: {
				add: '',
				remove: ''
			}
		},
		continents: {
			title: 'Continents',
			items: [ 'Antarctica', 'Europe', 'Asia', 'America', 'Oceania' ],
			index: 0,
			input: {
				add: '',
				remove: ''
			}
		},
		languajes: {
			title: 'Languajes',
			items: [ 'Arabic', 'Nepali', 'Catalan', 'Russian', 'Filipino' ],
			index: 0,
			input: {
				add: '',
				remove: ''
			}
		}
	};

	onHandleButton = (object) => {
		const nextState = produce(this.state, (draft) => {
			if (draft[object].items.length > draft[object].index + 1) draft[object].index = draft[object].index + 1;
			else draft[object].index = 0;
		});
		this.setState(nextState);
	};

	onAddButtonClick = (property) => {
		const nextState = produce(this.state, (draft) => {
			draft[property].items = draft[property].items.concat(draft[property].input.add);
			draft[property].input.add = '';
		});
		this.setState(nextState);
	};

	onRemoveButtonClick = (property) => {
		const nextState = produce(this.state, (draft) => {
			draft[property].items.splice(draft[property].input.remove - 1, 1);
		});
		this.setState(nextState);
	};

	onAddInputChange = (event, property) => {
		const value = event.target.value;
		const nextState = produce(this.state, (draft) => {
			draft[property].input.add = value;
		});
		this.setState(nextState);
	};

	onRemoveInputChange = (event, property) => {
		const value = event.target.value;
		const nextState = produce(this.state, (draft) => {
			draft[property].input.remove = value;
		});
		this.setState(nextState);
	};

	render() {
		const { friends, cities, continents, languajes } = this.state;
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al cómputo móvil - Test I!</p>

				<div className={styles.container_boards}>
					<Board
						object={friends}
						onAddButtonClick={() => this.onAddButtonClick('friends')}
						onRemoveButtonClick={() => this.onRemoveButtonClick('friends')}
						onAddInputChange={(event) => this.onAddInputChange(event, 'friends')}
						onRemoveInputChange={(event) => this.onRemoveInputChange(event, 'friends')}
					/>
					<Board
						object={cities}
						onAddButtonClick={() => this.onAddButtonClick('cities')}
						onRemoveButtonClick={() => this.onRemoveButtonClick('cities')}
						onAddInputChange={(event) => this.onAddInputChange(event, 'cities')}
						onRemoveInputChange={(event) => this.onRemoveInputChange(event, 'cities')}
					/>
					<Board
						object={continents}
						onAddButtonClick={() => this.onAddButtonClick('continents')}
						onRemoveButtonClick={() => this.onRemoveButtonClick('continents')}
						onAddInputChange={(event) => this.onAddInputChange(event, 'continents')}
						onRemoveInputChange={(event) => this.onRemoveInputChange(event, 'continents')}
					/>
					<Board
						object={languajes}
						onAddButtonClick={() => this.onAddButtonClick('languajes')}
						onRemoveButtonClick={() => this.onRemoveButtonClick('languajes')}
						onAddInputChange={(event) => this.onAddInputChange(event, 'languajes')}
						onRemoveInputChange={(event) => this.onRemoveInputChange(event, 'languajes')}
					/>
				</div>
				<div className={styles.summary}>
					<ul>
						<li>Friends: {friends.items.length}</li>
						<li>Cities: {cities.items.length}</li>
						<li>Continents: {continents.items.length}</li>
						<li>Languajes: {languajes.items.length}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
