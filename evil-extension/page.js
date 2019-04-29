const MATCH_LIST = {
    'there': 'their',
    'their': 'there',
    'they\'re': 'there',
    'There': 'Their',
    'Their': 'There',
    'They\'re': 'There',
    'THERE': 'THEIR',
    'THEIR': 'THERE',
    'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
    // TODO(you): Implement this function! See HW spec for details.
    var words = [];
    var count = 0;
    var newString = "";
    var children = node.childNodes;

    if (children[0] === undefined || children.length == 0) {
        if (node.nodeType == Node.TEXT_NODE) {
            var text = node.textContent.trim();
            var words = text.split(" ");
            for (var i = 0; i < words.length; i++) {
                words[i] = words[i].trim();
                if (words[i] == "" || words[i] === undefined) {
                    words.splice(i,1);
                    i--;
                }
            }
      
            for (var i = 0; i < words.length; i++) {
                if (words[i] in MATCH_LIST)
                    newString += MATCH_LIST[words[i]] + " ";
                else
                    newString += words[i] + " ";
            }

            node.textContent = newString;
        }
    } 
    else {
        for (var i = 0; i < children.length; i++)
            transformTextNodes(children[i]);
    }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');