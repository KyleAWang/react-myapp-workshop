import { createSelector } from 'reselect';

const selelctGlobal = (state) => state.get('global');


const makeSelectContent = () => createSelector(
    selelctGlobal,
    (globalState) => globalState.get('content'),
);

const makeSelectLoading = () => createSelector(
    selelctGlobal,
    (globalState) => globalState.get('loading'),
);

const makeSelectError = () => createSelector(
    selelctGlobal,
    (globalState) => globalState.get('error'),
);

const makeSelectLocationState = () => {
    let prevRoutingState;
    let prevRoutingStateJS;

    return (state) => {
        const routingState = state.get('route'); // or state.route

        if (!routingState.equals(prevRoutingState)) {
            prevRoutingState = routingState;
            prevRoutingStateJS = routingState.toJS();
        }

        return prevRoutingStateJS;
    };
};

export {
    makeSelectLocationState,
    makeSelectContent,
    makeSelectError,
    makeSelectLoading,
};
