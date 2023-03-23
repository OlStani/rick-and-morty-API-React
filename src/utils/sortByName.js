export function sortByName(characters) {
    return characters.sort((characterA, characterB) => {
        if (characterA.name > characterB.name) {
            return 1
        }
        if (characterA.name < characterB.name) {
            return -1
        }
        return 0
    })
}
