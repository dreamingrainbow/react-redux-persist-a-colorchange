export const CURRENT_BACKGROUND = 'CURRENT_BACKGROUND';
export const CHANGE_CURRENT_BACKGROUND = 'CHANGE_CURRENT_BACKGROUND';
export const CURRENT_MODAL_BACKGROUND = 'CURRENT_MODAL_BACKGROUND';

export const getCurrentBackground = () => {
    //axios get..
    //localStorage
    let currentBackground = 'red';
    if(window.localStorage.getItem(CURRENT_BACKGROUND)) {
        currentBackground = window.localStorage.getItem(CURRENT_BACKGROUND);
    }    
    return {
        type: CURRENT_BACKGROUND,
        payload: currentBackground
    }
}

export const changeCurrentBackground = (newColor = 'red') => {
    window.localStorage.setItem(CURRENT_BACKGROUND, newColor);
    return {
        type: CHANGE_CURRENT_BACKGROUND,
        payload: newColor
    }
}

export const getCurrentModalBackground = () => {    
    //localStorage
    let currentModalBackground = 'blue';
    if(window.localStorage.getItem(CURRENT_MODAL_BACKGROUND)) {
        currentModalBackground = window.localStorage.getItem(CURRENT_MODAL_BACKGROUND);
    }
    //axios get..
    return {
        type: CURRENT_MODAL_BACKGROUND,
        payload: currentModalBackground
    }
}
