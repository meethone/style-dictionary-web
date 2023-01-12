const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.registerFormat({
  name: 'css/classFormat',
  formatter: function (dictionary, config) {
    return `
    :root{
      ${dictionary.allProperties
        .map((prop) => {
          return prop.type === 'typography' ? false
          : !isNaN(prop.value) ? `--${prop.name}: ${prop.value}px;`
          : prop.type === 'spacing' ? `--${prop.name}: ${prop.value.split(' ')[0]}px ${prop.value.split(' ')[1]}px;`
          : `--${prop.name}: ${prop.value};`
        })
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
        };`: false})
      .join('\n')}
    `
  },
})


StyleDictionary.buildAllPlatforms();