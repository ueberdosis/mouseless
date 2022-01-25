import electronModule from 'electron'

const electron = process.type === 'browser' ? electronModule : require('@electron/remote')

function getApp() {
  if (electron.app) {
    return electron.app.remote
  }

  return null
}

export const app = getApp()

export const isProduction = process.env.NODE_ENV === 'production'

export const isDevelopment = !isProduction

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

export function getArrayDepth(value) {
  if (!Array.isArray(value)) {
    return 0
  }

  if (!value.length) {
    return 1
  }

  return 1 + Math.max(...value.map(getArrayDepth))
}

export function nestedValue(mainObject, key) {
  try {
    return key.split('.').reduce((obj, property) => obj[property], mainObject)
  } catch (err) {
    return null
  }
}
