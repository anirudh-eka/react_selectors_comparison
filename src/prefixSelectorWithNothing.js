
const getData = (state) => state.prefix;
export const name = 'Nothing'

let recomputations = 0
let prefixSelector = function(state) {
    recomputations++
    return getData(state) + ' World!'
}
prefixSelector.recomputations = () => recomputations;

export default prefixSelector;
