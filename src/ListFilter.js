import React, { Component } from 'react';

export class ListFilter extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.filterEmployees(this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='list-filter'>
				<input
					type='text'
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button>Filter</button>
			</form>
		);
	}
}

export default ListFilter;
