/**
 * console
 */
const dev = process.env.NODE_ENV === 'development'
export default new Proxy(
  {},
  {
    get: (_, key) => (dev ? console[key] : () => {}),
  }
)
