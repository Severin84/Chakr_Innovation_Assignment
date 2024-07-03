
import {selector} from 'recoil';
import {backgroundChange} from '../atoms/ColorChange';

export const backgroundColorSelector=selector({
    key:"backgroundcolorchangeSelector",
    get:({get})=>{
        const state=get(backgroundChange);

        return state.backgroundColor;
    }
})

export const ColorSelector=selector({
    key:"colorchangeSelector",
    get:({get})=>{
        const state=get(backgroundChange);

        return state.color;
    }
})