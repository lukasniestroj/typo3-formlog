module.exports = {
  options: {
    compress: true,
    ieCompat: false,
    paths: 'node_modules',
  },
  files: {
    cwd: '<%= paths.resources.private %>Less/',
    src: '*.less',
    dest: '<%= paths.resources.public %>Css/',
    ext: '.css',
    expand: true,
  },
};
