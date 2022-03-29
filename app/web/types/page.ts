export default {
  'about':["/about", "blank", () => import('../src/base/page/about')],
  'albums':["/albums/:id?", "blank", () => import('../src/base/page/albums')],
  'todos':["/", "blank", () => import('../src/base/page/todos')],
}