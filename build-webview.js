const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/webview/main.tsx'],
  bundle: true,
  outfile: 'webview/main.tsx',
  minify: true,
  loader: { '.tsx': 'tsx', '.ts': 'ts' },
  target: ['es2020']
}).catch(() => process.exit(1));
