
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import globalReducer from 'containers/App/reducer';
import ordersReducer from 'containers/OrdersPage/reducer';


// Initial routing state
const routeInitialState = fromJS({
    locationBeforeTransitions: null,
});


function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        /* istanbul ignore next */
        case LOCATION_CHANGE:
            return state.merge({
                locationBeforeTransitions: action.payload,
            });
        default:
            return state;
    }
}

export default function createReducer(asyncReducers, apolloClient) {
    return combineReducers({
        global: globalReducer,
        route: routeReducer,
        orders: ordersReducer,
        apollo: apolloClient.reducer(),
        ...asyncReducers,
    });
}

