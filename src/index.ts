export type RandomizeOption = {
  dictionary?: string
  prefix?: string
  suffix?: string
}

export const dictionary =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const randomize = (length: number, option: RandomizeOption = {}): string => {
  if (length < 1) throw new Error("Length should be more than 0")
  if (length > 10_000) throw new Error("Length should be less than 10000") // prevent abuse

  let result = ""
  const localDictionary = option?.dictionary || dictionary
  const suffix = option?.suffix || ""
  const prefix = option?.prefix || ""
  const iterator = length - suffix.length - prefix.length

  if (suffix.length + prefix.length > length) {
    throw new Error("Prefix and suffix should not more than length")
  }

  if (prefix) result += prefix
  for (let i = 0; i < iterator; i++) {
    result += localDictionary.charAt(Math.floor(Math.random() * localDictionary.length))
  }
  if (suffix) result += suffix

  return result
}
