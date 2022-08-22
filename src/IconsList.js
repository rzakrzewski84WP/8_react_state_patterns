/** @format */

import React, { Component } from 'react';
import './IconsList.css';

export default class IconsList extends Component {
	static defaultProps = {
		options: ['angry', 'anchor', 'archive', 'at', 'archway', 'baby', 'bell'],
	};
	constructor(props) {
		super(props);

		this.state = {
			icons: [],
		};
		this.addIcon = this.addIcon.bind(this);
	}

	addIcon() {
		let idx = Math.floor(Math.random() * this.props.options.length);
		let newIcon = this.props.options[idx];
		//always is better to copy state and return it with new updated key
		this.setState({ icons: [...this.state.icons, newIcon] });
	}

	render() {
		const icons = this.state.icons.map((i, idx) => (
			<i key={i + idx} className={`fa-solid fa-${i}`}></i>
		));
		return (
			<div className="IconsList">
				<h1>Mutating State the Safe Way</h1>
				<h3>Icons: {icons}</h3>
				<button onClick={this.addIcon}>Add Icon</button>
			</div>
		);
	}
}
