const StyleDictionary = require('style-dictionary').extend('classes_config.json');

StyleDictionary.registerFormat({
  name: 'css/classFormat',
  formatter: function (dictionary, config) {
    return `
    :root{
${dictionary.allProperties
  .map((prop) => {
    return prop.type === 'typography'  ? ``: `
  --${prop.name}: ${prop.value};
  `})
  .join('\n')}
}
${dictionary.allProperties
  .map((prop) => {
    return prop.type === 'typography'  ? `
    .${prop.name} {
        font-family: ${prop.value.fontFamily};
        font-size: ${prop.value.fontSize}px;
        font-weight: ${prop.value.fontWeight};
        line-height: ${prop.value.lineHeight};
    };`: ``})
  .join('\n')}
`
  },
})

  // StyleDictionary.registerFormat({
  //   name: 'css/classFormat',
  //   formatter: function (dictionary, config) {
  //     return `
  // ${dictionary.allProperties
  //   .map((prop) => {
  //     return prop.type === 'typography'  ? `
  // .${prop.name} {
  //     font-family: ${prop.value.fontFamily};
  //     font-size: ${prop.value.fontSize}px;
  //     font-weight: ${prop.value.fontWeight};
  //     line-height: ${prop.value.lineHeight};
  // };`: `:root {
  //   --${prop.name}: ${prop.value};
  // }`})
  //   .join('\n')}
  // `
  //   },
  // })

StyleDictionary.buildAllPlatforms();