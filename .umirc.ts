import { defineConfig } from 'umi';
import routes from './src/entry/routes'
const { join: joinPath } = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

function resolve(dir) {
  return joinPath(__dirname, dir);
}

export default defineConfig({
  title:'React app demo',
  alias: {
    // '@petals/basic/style': resolve('./external/petals-basic/src/style'),
    // '@petals/basic': resolve('./external/petals-basic/src/index.ts'),
    // 'petals-ui/dist': resolve('./external/petals/packages/petals/src'),
    // '@zoras/core/dist': resolve('./external/zora-core/src'),
    // '@zoras/adapter-ant-design/dist': resolve('./external/zora-antd/src'),
    // '@zoras/adapter-ant-design': resolve('./external/zora-antd/src/index.ts'),
    // '@handie/runtime-core/dist': resolve('./external/handie-core/src'),
    // '@handie/runtime-core': resolve('./external/handie-core/src/index.ts'),
    // 'handie-react/dist': resolve('./external/handie-react/src'),
    // 'handie-react': resolve('./external/handie-react/src/index.ts'),
    // '@handie/squirtle/dist': resolve('./external/squirtle/src'),
    // '@handie/squirtle': resolve('./external/squirtle/src/index.ts'),
    // 'handie-react-starter-antd/dist': resolve('./external/react-starter-antd/src'),
    // 'handie-react-starter-antd': resolve('./external/react-starter-antd/src/index.ts'),
    // 'handie-react-starter-umi/dist': resolve('./external/react-starter-umi/src'),
    // 'handie-react-starter-umi': resolve('./external/react-starter-umi/src/index.ts'),
  },
  nodeModulesTransform: { type: 'none' },
  extraBabelIncludes: ['@zoras/core', '@zoras/adapter-ant-design', '@handie/squirtle'],
  sass: {
    implementation: require('sass'),
    sassOptions: { fiber: require('fibers') },
    prependData: `@import "~@/shared/styles/helper";`,
  },
  routes,
  fastRefresh: {},
});
