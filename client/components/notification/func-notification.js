import Notification from './notification.vue'

export default {
  extends: Notification,
  computed: {
    style () {
      // 覆盖notification的style样式
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      console.log(this.visible)
      console.log(this.autoClose)
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () {
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestroy () {
    this.clearTimer()
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    }
  }
}
