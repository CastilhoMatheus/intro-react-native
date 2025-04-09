module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'react-native'],
  rules: {
    'react-native/no-unused-styles': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'lf', // ✅ Enforces LF line endings
      },
    ],
  },
};
