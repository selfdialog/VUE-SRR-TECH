import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    // console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  // 孙组件
  components: {
    ChildComponent
  },
  props: ['value1'],
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  },
  /* template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `, */
  template: `
    <div :style="style">
      <slot :value="value" bbb="ddd"></slot>
      <child-component></child-component>
    </div>
  `,
  methods: {

  }
}

// 爷爷组件
new Vue({
  components: {
    // 引用父组件
    CompOne: component
  },
  // 不推荐的方法，后期升级vue版本会被弃用
  /** 跨级调用 */
  provide () {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data: {
    value: '11wqer'
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}}</span>
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})
