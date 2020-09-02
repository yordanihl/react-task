import React, { Component } from 'react';
import ListPageBody from './ListPageBody';
import ListPages from './ListPages';
import ListError from './ListError';
import ListSpinner from './ListSpinner';
import MaximizedAvatar from './MaximizedAvatar';
import { customization } from './globalVariables';
import { fetchEmployeesList } from './globalFunctions';
import ListFilter from './ListFilter';

class ListContainer extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			isError: false,
			currentPage: 1,
			totalPages: 0,
			pageBody: [],
		};
		this.employeesList = [];
		this.employeesFilteredList = null;
		this.fetchAndStoreEmployees = this.fetchAndStoreEmployees.bind(this);
		this.changePage = this.changePage.bind(this);
		this.openAvatar = this.openAvatar.bind(this);
		this.closeAvatar = this.closeAvatar.bind(this);
		this.filterEmployees = this.filterEmployees.bind(this);

		this.fetchAndStoreEmployees();
	}

	fetchAndStoreEmployees() {
		// don't set state if component is not mounted
		if (!this.state.isLoading) this.setState({ isLoading: true });
		fetchEmployeesList(
			(data) => {
				this.setState({ isLoading: false, isError: false });
				this.employeesList = data.map((employee, index) => {
					return { ...employee, index };
				});
				this.changePage();
			},
			() => {
				this.setState({ isLoading: false, isError: true });
			}
		);
	}

	changePage(currentPage = this.state.currentPage) {
		const employeesActiveList =
			this.employeesFilteredList === null
				? this.employeesList
				: this.employeesFilteredList;
		const pageBody = [];
		const firstItem = (currentPage - 1) * 20;
		const totalPages = Math.ceil(employeesActiveList.length / 20);

		for (let i = firstItem; i < firstItem + 20; i++) {
			if (!employeesActiveList[i]) break;
			pageBody.push(employeesActiveList[i]);
		}
		this.setState({ currentPage, totalPages, pageBody });
	}

	openAvatar(image) {
		this.setState({ openedAvatar: image });
	}

	closeAvatar() {
		this.setState({ openedAvatar: '' });
	}

	filterEmployees(filter) {
		if (filter === '') this.employeesFilteredList = null;
		else
			this.employeesFilteredList = this.employeesList.filter(
				(employee) => customization.labels[employee.index] === filter
			);
		this.changePage(1);
	}

	render() {
		return (
			<main>
				{this.state.isLoading ? (
					<ListSpinner />
				) : this.state.isError ? (
					<ListError refresh={this.fetchAndStoreEmployees} />
				) : (
					<>
						<ListFilter filterEmployees={this.filterEmployees} />
						{this.employeesFilteredList !== null &&
						this.employeesFilteredList.length === 0 ? (
							<p style={{ marginLeft: '10px' }}>No results.</p>
						) : (
							<>
								<ListPageBody
									pageBody={this.state.pageBody}
									openAvatar={this.openAvatar}
								/>
								<ListPages
									pages={this.state.totalPages}
									currentPage={this.state.currentPage}
									changePage={this.changePage}
								/>
								<MaximizedAvatar
									openedAvatar={this.state.openedAvatar}
									closeAvatar={this.closeAvatar}
								/>
							</>
						)}
					</>
				)}
			</main>
		);
	}
}

export default ListContainer;
