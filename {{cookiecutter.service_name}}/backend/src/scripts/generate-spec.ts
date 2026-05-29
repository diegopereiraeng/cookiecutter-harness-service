import swaggerJsdoc from 'swagger-jsdoc'
import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'

const version = process.env.APP_VERSION || '0.0.0'
const commit  = process.env.GIT_COMMIT   || 'local'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: '{{ cookiecutter.service_name }} API',
      description: '{{ cookiecutter.service_description }}',
      version,
      contact: { email: '{{ cookiecutter.owner_email }}' },
    },
    'x-git-commit': commit,
  },
  apis: ['./src/**/*.ts'],
}

const spec = swaggerJsdoc(options)
const docsDir = path.resolve(__dirname, '../../docs')
fs.mkdirSync(docsDir, { recursive: true })

fs.writeFileSync(path.join(docsDir, 'openapi.yaml'), yaml.dump(spec))
fs.writeFileSync(path.join(docsDir, 'openapi.json'), JSON.stringify(spec, null, 2))

const pathCount   = Object.keys((spec as any).paths || {}).length
const schemaCount = Object.keys((spec as any).components?.schemas || {}).length

console.log('⚙️  Generating OpenAPI spec from JSDoc annotations...')
console.log(`✅  OpenAPI YAML written to: ${path.join(docsDir, 'openapi.yaml')}`)
console.log(`✅  OpenAPI JSON written to: ${path.join(docsDir, 'openapi.json')}`)
console.log(`📄  Paths documented: ${pathCount}`)
console.log(`📦  Schemas defined:  ${schemaCount}`)
