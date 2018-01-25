import * as R from "ramda";
export const name = 'Rambda';

let recomputations = 0

const getData = (state) => state.prefix;

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

