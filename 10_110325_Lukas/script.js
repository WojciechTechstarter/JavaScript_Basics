
let my_list = ['one', 'two', 'three', 'four', 'five']


function createHTMLListe(liste) {

    let htmlElement = liste.map((elem) => `<li>${elem}</li>\n`)   //you can also use the method .join
    console.log(htmlElement)
    let flattenedList = htmlElement.toString().replaceAll(",", "")
    console.log(flattenedList)
    let ergebnis = `<ul>\n ${flattenedList}</ul>`
    console.log(ergebnis)
    return ergebnis
}

createHTMLListe(my_list)


function setListContent() {
    let listDiv = document.getElementById("liste")
    let content = createHTMLListe(my_list)
    listDiv.innerHTML = content
}


function setUserInputList() {
    let userInput = document.getElementById("userInput")
    let text = userInput.value

    let listDiv = document.getElementById("userInputListe")

}