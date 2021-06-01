/*
 All these utility functions
 */

/**
 * to get id from the api url
 * why don't we use the api url directly?
 * because we've wrapped the function...
 */
export const getLastNumFromURL = (url: string): string => {
  if (!url) {
    return ''
  }
  const match = url.match(/(\d+)\/?$/)
  if (!match || match.length < 1) {
    return ''
  }
  return match[1]
}

/**
 * translate hyphen_word to camelWord
 */

export const slashToCamel = (str: string):
  string => str.replace(/_([a-z])/g, (g) => g[1].toUpperCase())

export const getRandomInt = (min: number, max: number):
  number => Math.floor(Math.random() * (max - min) + min)
