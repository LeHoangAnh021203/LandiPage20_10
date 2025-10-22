module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: [
    'UNIFIED_GOOGLE_APPS_SCRIPT.js',
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/'
  ],
  overrides: [
    {
      files: ['UNIFIED_GOOGLE_APPS_SCRIPT.js'],
      excludedFiles: ['UNIFIED_GOOGLE_APPS_SCRIPT.js']
    }
  ]
};
