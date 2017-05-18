import { fromJS } from 'immutable';

import ordersPageReducer from '../reducer';

import { loadOrders } from '../actions';

describe('ordersPageReducer', () => {
	let state;
	beforeEach(() => {
		state = fromJS({
		  loading: false,
		  error: false,
		  orders: false,
		  item: false,
		  showModal: false,
		  order: false,
		});
	});

	it('should return the initial state', () => {
		const expectedResult = state;
		expect(ordersPageReducer(undefined, {})).toEqual(expectedResult);
	})
})