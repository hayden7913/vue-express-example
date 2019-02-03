module.exports = {
  env: {
    "jest": true
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  parserOptions: {
      "ecmaVersion": 2017,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  rules: {
      "semi": 2,
      "vue/v-bind-style": "off",
      "vue/v-on-style": "off",
      "import/no-unresolved": "off",
      "no-param-reassign": "off"
  }
}
