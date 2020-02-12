// import className from '../assets/styles/footer.styl'
import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Sel11fDialog'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
