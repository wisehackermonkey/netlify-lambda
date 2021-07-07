/**
 * This file is a configuration file generated by the `Template` extension on `vscode`
 * @see https://marketplace.visualstudio.com/items?itemName=yongwoo.template
 */
module.exports = {
  // You can change the template path to another path
  templateRootPath: "./.templates",
  // After copying the template file the `replaceFileTextFn` function is executed
  replaceFileTextFn: (fileText, templateName, utils) => {
    // @see https://www.npmjs.com/package/change-case
    const { changeCase } = utils;
    // You can change the text in the file
    return fileText
      .replace(/netlify-lambda/g, templateName)
      .replace(
        /NetlifyLambda/g,
        changeCase.pascalCase(templateName)
      )
      .replace(
        /netlify-lambda/g,
        changeCase.paramCase(templateName)
      );
  },
  renameFileFn: (fileName, templateName, utils) => {
    const { path } = utils;
    const { base } = path.parse(fileName);
    return base.replace(/netlify-lambda/gm, templateName);
  },
  renameSubDirectoriesFn: (directoryName, templateName, _utils) => {
    const { changeCase } = _utils;
    const newDirectoryName = changeCase.paramCase(templateName);
    return directoryName.replace(/netlify-lambda/g, newDirectoryName);
  }
};
