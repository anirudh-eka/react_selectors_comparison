import * as R from "ramda";
import {getData} from "./prefixSelectorWithNothing";
export const name = 'Rambda';

let recomputations = 0

const memoized = R.memoizeWith(R.identity, (state) => {
    recomputations++;
    return state + ' World!';
});

let withRamda = (state) => {
    const data = getData(state)
    return memoized(data)
};

withRamda.recomputations = () => recomputations;

export default withRamda;

