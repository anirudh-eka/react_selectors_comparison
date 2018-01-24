export const getData = (state) => state.prefix;
export const name = 'Nothing'

let recomputations = 0
export let prefixSelectorCore = function(getData, state) {
    console.log('called')
    recomputations++
    return getData(state) + ' World!'
}
prefixSelectorCore.recomputations = () => recomputations;

let full =  function (state) { prefixSelectorCore(getData, state) };
full.recomputations = prefixSelectorCore.recomputations;

export default full;
