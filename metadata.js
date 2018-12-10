module.exports = {
  name: 'fc.template',
  description: '',
  userPrompt: [
    {
      type: 'input',
      name: 'description',
      message: 'Function description:'
    },
    {
      type: 'input',
      name: 'serverName',
      message: 'Please input server name:'
    },
    {
      type: 'input',
      name: 'timeout',
      message: 'Set timeout(s):',
      'default': 30
    },
    {
      type: 'list',
      name: 'memorySize',
      message: 'Choose memory size?',
      'default': '128',
      choices: ['128', '192', '256', '320', '384', '448', '512', '576', '640', '704', '768', '832', '896', '960', '1024', '1088', '1152', '1216', '1280', '1344', '1408', '1472', '1536', '1600', '1664', '1728', '1792', '1856', '1920', '1984', '2048', '2112', '2176', '2240', '2304', '2368', '2432', '2496', '2560', '2624', '2688', '2752', '2816', '2880', '2944', '3008', '3072'],
      when: (answer) => {
        return true
      }
    },
    {
      type: 'list',
      name: 'event',
      message: 'Choose Event',
      'default': '',
      choices: ['NO Event', 'HTTP', 'Timer', 'Log', 'RDS', 'MNSTopic'],
      when: (answer) => {
        return true
      }
    }
  ],
  copyOnlyPaths: [ 'test' ]
};
