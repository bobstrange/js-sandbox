Vue.component('product-review',
  {
    template: `
      <form class="review-form" @submit.prevent="onSubmit">
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" placeholder="name">
        </p>
        <p>
          <label for="review">Review:</label>
          <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    `,
    data() {
      return {
        name: null,
        review: null,
        rating: 3
      }
    },
    methods: {
      onSubmit() {
        const productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        this.name = null
        this.review = null
        this.rating = null
        console.log(productReview)
      }
    }
  }
)

Vue.component('product', {
  template: `
    <div class="product">
      <div class="premium">User is premium: {{ premium }}</div>
      <div class="product-image">
        <img
           :src="image"
           :alt="altText"
        >
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <ul>
          <li v-for="detail of details">{{ detail }}</li>
        </ul>

        <div
          class="color-box"
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
        >

        </div>
      </div>
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >Add to cart</button>
    </div>

  `,
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
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
      ]
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})

