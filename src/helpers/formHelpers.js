/**
 * Filtra os atributos de um objeto, removendo os atributos que não são aceitos.
 *
 * @param {Object} attrs - Objeto contendo os atributos a serem filtrados.
 * @param {Array<string>} [nonAcceptedAttrs=['class']] - Array contendo as chaves dos atributos que devem ser removidos.
 * @returns {Object} Novo objeto contendo apenas os atributos que não estão na lista de atributos não aceitos.
 *
 * @example
 * const attrs = {
 *   class: 'button',
 *   type: 'text',
 *   placeholder: 'Enter your name',
 *   disabled: false
 * }
 * 
 * const result = filterAttributes(attrs, ['class', 'disabled'])
 * // result será { type: 'text', placeholder: 'Enter your name' }
 */
export const filterAttributes = (attrs, nonAcceptedAttrs = ['class']) => {
  return Object.fromEntries(
    Object.entries(attrs).filter(([key]) => !nonAcceptedAttrs.includes(key))
  )
}