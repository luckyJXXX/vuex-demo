export default {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-pxtorem': {
      rootValue: 32,
      propList: ['*']
    }
  }
}
