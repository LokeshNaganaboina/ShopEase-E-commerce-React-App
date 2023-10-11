
export const addItemHandler = item => {
    return (dispatch, getState) => {
        const currentQuantity = getState().cart.items.find(i => i.id === item.id)?.quantity || 0;
        if (currentQuantity + 1 <= 5) {
            dispatch({
                type: "ADD_ITEM",
                payload: {
                    item: item
                }
            });
        } else {
            console.warn("Item quantity exceeds the limit of 5.");
            // Optionally, you can dispatch another action here to handle the error or inform the user.
        }
    }
}


export const removeItemHandler = id => {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: id
            }
        })
    }
}

export const clearCartHandler = () => {
    return dispatch => {
        dispatch({
            type: "CLEAR_CART"
        })
    }
}