
function countElements() {
    const elements = document.querySelectorAll("p");
    document.getElementById("result1").textContent = `There are ${elements.length} paragraph tags on this page.`;
}

function countElementsInDiv(divId) {
    const div = document.getElementById(divId);
    if (div) {
        const elements = div.querySelectorAll("p");
        document.getElementById("result2").textContent = `There are ${elements.length} paragraph tags inside ${divId}.`;
    } else {
        document.getElementById("result2").textContent = `No such div with ID ${divId} found.`;
    }
}
