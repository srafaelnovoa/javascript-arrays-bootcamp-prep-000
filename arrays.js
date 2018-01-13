var chocolateBars  = ["snickers", "hundred grand", "kitkat", "skittle"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  array = [element, ...array]
  return array
}
function addElementToEndOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToEndOfArray(array,element) {
  array = [element, ...array]
  return array
}