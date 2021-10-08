import {CLICKED_ON_CLASS} from './types';

export const clickedOnClass = (key) => (
    {
        type: CLICKED_ON_CLASS,
        data: key
    }
)