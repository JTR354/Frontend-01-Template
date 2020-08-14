const Generator = require('yeoman-generator')

const { getTemplates } = require('./utils')

const templates = getTemplates('templates')
// console.log(JSON.stringify(templates, null, 2))

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // Next, add your custom code
    this.option('babel') // This method adds support for a `--babel` flag
  }
  async selection() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name?'
      },
      {
        type: 'input',
        name: 'install',
        message: 'Do you want to install?(y/n)'
      }
    ])
  }
  create() {
    const config = { ...this.answers }
    delete config.install
    for (const path of templates) {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(path),
        config
      )
    }
  }
  install() {
    if (this.answers.install.match(/^[y|yes]$/i)) {
      // todo
      console.log('install')
      this.npmInstall()
    }
    // console.log(this.option)
    // console.log(this.fs.copyTpl)
  }
}
