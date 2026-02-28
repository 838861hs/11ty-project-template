const ejs = require('ejs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // ===== 必要なものだけコピー =====
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'assets/js' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });

  // ===== EJS拡張 =====
  eleventyConfig.addExtension('ejs', {
    outputFileExtension: 'html',
    compile: async function (inputContent, inputPath) {
      return async (data) => {
        return ejs.render(inputContent, data, {
          filename: inputPath,
          root: [path.join(process.cwd(), 'src', '_includes')],
        });
      };
    },
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['ejs'],
  };
};
