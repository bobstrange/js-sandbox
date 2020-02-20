const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    image: './assets/vmSocks-green-onWhite.jpg',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    inStock: true,
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart = this.cart + 1
    },
    updateProduct(index) {
      const selectedVariant = this.variants[index]
      this.image = selectedVariant.variantImage
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    }
  }
})

