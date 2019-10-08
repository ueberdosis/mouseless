export function findDuplicatesInArray(data = []) {
  const result = []

  data.forEach((element, index) => {
    if (data.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element)
      }
    }
  })

  return result
}

export function isSameArray(array1, array2) {
  const match1 = array1.every(key => array2.includes(key))
  const match2 = array2.every(key => array1.includes(key))
  return match1 && match2
}
