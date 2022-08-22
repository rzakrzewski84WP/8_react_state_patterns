/** @format */

import React, { Component } from 'react';
import './ScoreKeeper.css';

export default class ScoreKeeper extends Component {
	constructor(props) {
		super(props);
		this.state = { score: 0 };
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleAddThree = this.handleAddThree.bind(this);
		this.handleCallbackThree = this.handleCallbackThree.bind(this);
		this.handleCallbackThreeRefactor =
			this.handleCallbackThreeRefactor.bind(this);
	}

	handleAddOne() {
		//we shouldn't follow this pattern
		this.setState({ score: this.state.score + 1 });
	}

	handleAddThree() {
		//it won't work because setState is async
		//this setState functions are bounded together
		//only last setState will be run, it will add 4 instead of 6 (1+1+4)
		this.setState({ score: this.state.score + 1 });
		this.setState({ score: this.state.score + 1 });
		this.setState({ score: this.state.score + 4 });
	}

	handleCallbackThree() {
		//setState with callbacks are treated separately
		this.setState((st) => {
			console.log(st);
			return { score: st.score + 1 };
		});
		this.setState((st) => {
			return { score: st.score + 1 };
		});
		this.setState((st) => {
			return { score: st.score + 1 };
		});
	}

	//the best way to change state
	addOneCallback(oldState) {
		return { score: oldState.score + 1 };
	}
	handleCallbackThreeRefactor() {
		this.setState(this.addOneCallback);
		this.setState(this.addOneCallback);
		this.setState(this.addOneCallback);
	}
	//the best way to change state

	render() {
		return (
			<div className="ScoreKeeper">
				<h1>Score: {this.state.score}</h1>
				<button onClick={this.handleAddOne}>Add 1 Point</button>
				<button onClick={this.handleAddThree}>Add 3 Point</button>
				<button onClick={this.handleCallbackThree}>Add 2 Callback</button>
				<button onClick={this.handleCallbackThreeRefactor}>
					Add 3 Callback Refactor
				</button>
			</div>
		);
	}
}
