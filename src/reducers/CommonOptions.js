export const SET_CITIES = 'SET_CITIES';

const initialState = {
    cities: [
        {id: 1, name: "Ahmedabad" },
        {id: 2, name: "Surat" },
        {id: 3, name: "Vadodara" },
        {id: 4, name: "Rajkot" },
        {id: 5, name: "Bhavnagar" }
    ],
};

export const setCities = cities => ({
    type: SET_CITIES,
    cities
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.cities
            };
        default: 
    }
    return state;
}
