const StyleDictionary = require('style-dictionary').extend('config.json');

StyleDictionary.registerFormat({
  name: 'css/classFormat',
  formatter: function (dictionary, config) {
    return `
    :root{
      ${dictionary.allProperties
        .map((prop) => {
          const value = prop.value
          const name = prop.name
          const type = prop.type
          return type === 'typography' ? ``
          : !isNaN(value) ? `--${name}: ${value}px;`
          : prop.type === 'spacing' ? `--${name}: ${value.split(' ')[0]}px ${value.split(' ')[1]}px;`
          : `--${name}: ${value};`
        })
        .join('\n')}
    }
    ${dictionary.allProperties
      .map((prop) => {
        const value = prop.value
        const type = prop.type
        const lineHeight = value.lineHeight
        return type === 'typography'? `
        .${prop.name} {
            font-family: ${value.fontFamily};
            font-size: ${value.fontSize}px;
            font-weight: ${value.fontWeight};
            line-height: ${lineHeight}${isNaN(lineHeight)? '': 'px' };
        };`: ``})
      .join('\n')}
    `
  },
})


StyleDictionary.buildAllPlatforms();