import React, { Component } from 'react';
import { defaultAvatar, customization } from './globalVariables';

export default class ListSingleEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: customization.colors[this.props.employee.index]
				? customization.colors[this.props.employee.index]
				: '',
			label: customization.labels[this.props.employee.index]
				? customization.labels[this.props.employee.index]
				: '',
		};
		this.openAvatar = this.openAvatar.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.changeLabel = this.changeLabel.bind(this);
	}

	useDefaultAvatar(event) {
		event.target.src = defaultAvatar;
	}

	openAvatar(event) {
		this.props.openAvatar(event.target.src);
	}

	changeColor(event) {
		if (event.target.value)
			customization.colors[this.props.employee.index] = event.target.value;
		else delete customization.colors[this.props.employee.index];
		localStorage.setItem('customization', JSON.stringify(customization));
		this.setState({ color: event.target.value });
	}

	changeLabel(event) {
		if (event.target.value)
			customization.labels[this.props.employee.index] = event.target.value;
		else delete customization.labels[this.props.employee.index];
		localStorage.setItem('customization', JSON.stringify(customization));
		this.setState({ label: event.target.value });
	}

	render() {
		return (
			<div
				className='list-single-employee'
				style={{ backgroundColor: this.state.color }}
			>
				<img
					src={this.props.employee.avatar}
					alt={'avatar of ' + this.props.employee.name}
					onError={this.useDefaultAvatar}
					onClick={this.openAvatar}
					className='employee-avatar'
				/>
				<h3 className='employee-name' title={this.props.employee.name}>
					{this.props.employee.name}
				</h3>
				<h4 className='employee-title'>
					<div title={this.props.employee.title}>
						{this.props.employee.title}
					</div>
					<div title={this.props.employee.company}>
						{this.props.employee.company}
					</div>
				</h4>
				<div>Bio:</div>
				<div className='employee-bio'>{this.props.employee.bio}</div>
				<select
					className='employee-color'
					defaultValue={this.state.color}
					onChange={this.changeColor}
				>
					<option value=''>default color</option>
					<option value='lightblue'>lightblue</option>
					<option value='darkseagreen'>darkseagreen</option>
					<option value='khaki'>khaki</option>
				</select>
				<input
					className='employee-label'
					type='text'
					value={this.state.label}
					onChange={this.changeLabel}
					placeholder='no label'
				/>
			</div>
		);
	}
}
