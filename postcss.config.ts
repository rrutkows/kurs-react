import path from 'node:path';
import webpackConfig from './webpack.config';

import AutoPrefixer from 'autoprefixer';
import PostCssImportPlugin from 'postcss-import';
import PostCssNestedPlugin from 'postcss-nested';

export default {
    plugins: [
        PostCssImportPlugin({
            resolve: (id, basedir) => {
                const aliases = webpackConfig?.resolve?.alias || [];

                for (const alias in aliases) {
                    if (id.startsWith(alias)) {
                        //@ts-ignore
                        return path.resolve(aliases[alias], id.slice(alias.length));
                    }
                }
                return id;
            }
        }),
        PostCssNestedPlugin(),
        AutoPrefixer()
    ]
};