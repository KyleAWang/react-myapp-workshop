import {
  LOAD_ORDERS,
} from '../constants';

import { loadOrders } from '../actions';


describe('OrdersPage Actions', () => {
  describe('loadOrders', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ORDERS,
      };
      expect(loadOrders()).toEqual(expectedResult);
    });
  });
});
