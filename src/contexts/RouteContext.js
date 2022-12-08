import React, { useContext, useReducer } from 'react';

const RouteContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'route':
            return { ...state, route: action.route };
        default:
            return state;
    }
};

export const useRoute = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { route: window.location.pathname });

    const setRoute = (route) => dispatch({ type: 'route', route });
    return <RouteContext.Provider value={{ route: state.route, setRoute }}>{children}</RouteContext.Provider>;
};
