export const filterAttributes = (attrs, nonAcceptedAttrs = ['class']) => {
  return Object.fromEntries(
    Object.entries(attrs).filter(([key]) => !nonAcceptedAttrs.includes(key))
  )
}