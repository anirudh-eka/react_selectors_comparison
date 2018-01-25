
export const name = 'Nothing'

let recomputations = 0

export const getData = (state) => state.prefix;

export let prefixSelectorCore = function(getData, state) {
    recomputations++
    console.log(getData(state))
    return getData(state) + ' World!'
}



prefixSelectorCore.recomputations = () => recomputations;

let full =  (state) => prefixSelectorCore(getData, state);
full.recomputations = prefixSelectorCore.recomputations;

export default full;
