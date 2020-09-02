import employeesList from './employeesJSON.js';

export function fetchEmployeesList(callbackThen, callbackCatch) {
	setTimeout(() => {
		Math.random() < 0.75
			? callbackThen(employeesList)
			: callbackCatch('error 502 or something');
	}, 1500);
}
