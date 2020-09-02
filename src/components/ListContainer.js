import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListPageBody from 'components/ListPageBody';
import ListPages from 'components/ListPages';
import ListError from 'components/ListError';
import ListSpinner from 'components/ListSpinner';
import MaximizedAvatar from 'components/MaximizedAvatar';
import { customization } from 'globalVariables';
import { fetchEmployeesList } from 'globalFunctions';
import ListFilter from 'components/ListFilter';

const Main = styled.main`
	position: relative;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
	margin: 25px auto;
	height: calc(100vh - 50px);
	min-width: 260px;
	width: calc(100% - 100px);
`;

let employeesList = [];
let employeesFilteredList = null;

function fetchAndStoreEmployees({ setRequest, changePage }) {
	setRequest({ isLoading: true, isError: false });

	fetchEmployeesList(
		(data) => {
			setRequest({ isLoading: false, isError: false });
			employeesList = data.map((employee, index) => {
				return { ...employee, index };
			});
			changePage();
		},
		() => {
			setRequest({ isLoading: false, isError: true });
		}
	);
}

export default function ListContainer() {
	const [request, setRequest] = useState({ isLoading: true, isError: false });
	const [pages, setPages] = useState({ current: 1, total: 1, body: [] });
	const [avatar, setAvatar] = useState('');

	function changePage(nextPage = 1) {
		const employeesActiveList =
			employeesFilteredList === null ? employeesList : employeesFilteredList;
		const pageBody = [];
		const firstItem = (nextPage - 1) * 20;
		const totalPages = Math.ceil(employeesActiveList.length / 20);

		for (let i = firstItem; i < firstItem + 20; i++) {
			if (!employeesActiveList[i]) break;
			pageBody.push(employeesActiveList[i]);
		}
		setPages({ current: nextPage, total: totalPages, body: pageBody });
	}

	function filterEmployees(filter) {
		if (filter === '') employeesFilteredList = null;
		else
			employeesFilteredList = employeesList.filter(
				(employee) => customization.labels[employee.index] === filter
			);
		changePage(1);
	}

	useEffect(() => {
		fetchAndStoreEmployees({ setRequest, changePage });
	}, []);

	return (
		<Main>
			{request.isLoading ? (
				<ListSpinner />
			) : request.isError ? (
				<ListError
					refresh={() => {
						fetchAndStoreEmployees({ setRequest, changePage });
					}}
				/>
			) : (
				<>
					<ListFilter filterEmployees={filterEmployees} />
					{employeesFilteredList !== null &&
					employeesFilteredList.length === 0 ? (
						<p style={{ marginLeft: '10px' }}>No results.</p>
					) : (
						<>
							<ListPageBody pageBody={pages.body} openAvatar={setAvatar} />
							<ListPages
								pages={pages.total}
								currentPage={pages.current}
								changePage={changePage}
							/>
							<MaximizedAvatar
								openedAvatar={avatar}
								closeAvatar={() => {
									setAvatar('');
								}}
							/>
						</>
					)}
				</>
			)}
		</Main>
	);
}
