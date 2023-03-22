import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'bymnphn06e4e',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'Jdr2oVYRwYl1apwvd2Yg8xcNQTmKzQH8arYsIE93SlY'
})

export default client;