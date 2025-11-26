import {
    ADD_ITEM,
    INCREMENT_QTY,
    DECREMENT_QTY,
    DELETE_ITEM,
    CLEAR_CART,
} from "../actions/addCartActions";

const initialState = {
    items: [],
};

function findItem(items, id) {
    return items.find((item) => item.id === id);
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const p = action.payload.product;
            const existing = findItem(state.items, p.id);
            let items;

            if (existing) {
                items = state.items.map((item) =>
                    item.id === p.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                items = [...state.items, { ...p, qty: 1 }];
            }
            return { ...state, items };
        }

        case INCREMENT_QTY: {
            const { id } = action.payload;
            const items = state.items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            );
            return { ...state, items };
        }

        case DECREMENT_QTY: {
            const { id } = action.payload;
            const items = state.items
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                )
                .filter((item) => item.qty > 0);
            return { ...state, items };
        }

        case DELETE_ITEM: {
            const { id } = action.payload;
            const items = state.items.filter((item) => item.id !== id);
            return { ...state, items };
        }

        case CLEAR_CART:
            return initialState;

        default:
            return state;
    }
}
