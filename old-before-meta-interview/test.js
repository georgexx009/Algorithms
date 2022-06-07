// write a fuction
/*2 arguemnts
name of css
the value of the css attribute (color, background, high, lineHight)
color: 'string'
*/

let para = document.querySelector('p');
let compStyles = window.getComputedStyle(para);
para.textContent = 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height') +
    '.';


function searching(nodeElementToBeSearch, nameCSSAttribute, attributeValue) {
    let matchedNodes = [] // helper array to save this layer matched nodes
    if (!nodeElementToBeSearch) return [] // ending loop statement

    // perform the action in the node/layer
    const compStyles = window.getComputedStyle(nodeElementToBeSearch);
    const attributeFound = compStyles.getPropertyValue(nameCSSAttribute);
    if (attributeFound === attributeValue) {
        // save it in my helper array
        matchedNodes = [...matchedNodes, nodeElementToBeSearch]
    }

    let compoundMatchedNodes = [] // helper array inner matched nodes
    nodeElementToBeSearch.children.forEach(nodeElement => {
        const individualMatchedNodes = searching(nodeElement, nameCSSAttribute, attributeValue)
        compoundMatchedNodes = [...compoundMatchedNodes, ...individualMatchedNodes]
    })

    return [...matchedNodes, ...compoundMatchedNodes]
}

function findMatchedNodes(nameCSSAttribute, attributeValue) {
    const root = document.body;
    // start body
    // compounds Nodes
    const result = searching(root, nameCSSAttribute, attributeValue);

    return result
}

// findMatchedNodes()
