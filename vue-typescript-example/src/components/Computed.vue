<script lang="ts">
import Vue from 'vue'

export type Rect = {
  width: number
  height: number
}

export type Position = {
  top: number
  left: number
}

export default Vue.extend({
  data() {
    return {
      bounds: null as ClientRect | DOMRect | null
    }
  },
  computed: {
    rect(): Rect {
      if (this.bounds === null) return { width: 0, height: 0 }
      return {
        width: this.bounds.width,
        height: this.bounds.height
      }
    },
    position(): Position {
      if (this.bounds === null) return { top: 0, left: 0 }
      return {
        top: this.bounds.top,
        left: this.bounds.left
      }
    }
  }
})
</script>
