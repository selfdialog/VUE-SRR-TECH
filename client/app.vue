<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <p>{{textC}} {{textPlus}}</p> -->
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState, mapMutations, mapActions, mapGetters
  // mapGetters
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store, this['a/textPlus'])
    // let i = 1

    // this.testAction()
    /* this.updateCountAsync({
      num: 5,
      time: 2000
    }) */
    // this['a/updateText']('123')
    // this['a/add']()
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters({
      'fullName': 'fullName'
    })
    /* count () {
      return this.$store.state.count
    }, */
    /* fullName () {
      return this.$store.getters.fullName
    } */
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>
