import { fromJS } from 'immutable';
import {
    selectOrders,
    makeSelectOreders,
    makeSelectShowModal,
    makeSelectOrder,
} from '../selectors';

describe('selectOrders', () => {
	it('should select the orders state', () => {
		const ordersState = fromJS({
			orders: {}
		});

		const mockedState = fromJS({
			orders: ordersState,
		});
		expect(selectOrders(mockedState)).toEqual(ordersState);
	})
})

describe('makeSelectOrder', () => {
	const ordersSelector = makeSelectOreders();
	it('should select the orders', () => {
		const orders = '333';
		const mockedState = fromJS({
			orders: {
				orders: orders,
			},
		});
		expect(ordersSelector(mockedState)).toEqual(orders);
	})
});
