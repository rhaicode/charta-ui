module.exports = {
  '**/*.ts?(x)': filenames =>
    `eslint --fix --file ${filenames
      .map(file => file.split(process.cwd())[1])
      .join(' --file ')}`,
}
