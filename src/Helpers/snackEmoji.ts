export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizzas':
      return '🍕'
    case 'bebida':
      return '🥤'
    case 'sobremesas':
      return '🍨'
    default:
      return '🧐'
  }
}
