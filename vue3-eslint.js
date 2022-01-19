const INLINE_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
];

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        // https://github.com/vuejs/eslint-plugin-vue
        'plugin:vue/base',
        // VUE 2.0
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended'
      ],
      rules: {
        // plugin:vue/essential && plugin:vue/strongly-recommended && plugin:vue/recommended
        'vue/no-use-v-if-with-v-for': 0,
        'vue/max-attributes-per-line': ['error', { singleline: { max: 6 }, multiline: { max: 1 } }],
        'vue/html-self-closing': ['error', { html: { void: 'never', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }],
        'vue/singleline-html-element-content-newline': ['error', { ignoreWhenNoAttributes: true, ignoreWhenEmpty: true, ignores: ['pre', 'template', ...INLINE_ELEMENTS] }],

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
      }
    }
  ]
};
