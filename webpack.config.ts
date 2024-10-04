import 'webpack-dev-server';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin';

import {TypedCssModulesPlugin} from './config/webpack.plugins';
const __dirname = dirname(fileURLToPath(import.meta.url));

const mode = (process.env.NODE_ENV as "production" | "development" | undefined) ?? "development";

const config = {
    mode: mode,
    entry: './src/index.tsx',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({
                            before: [mode == 'development' && ReactRefreshTypeScript()].filter(Boolean)
                        }),
                        transpileOnly: true
                    }
                }],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    mode == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader'
                ],
            },
            {
				test: /\.ttf$/,
				type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
			},
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': [ path.resolve(__dirname, 'src') ],
            '@public': [ path.resolve(__dirname, 'public') ]
        }
    },
    output: {
        filename: 'bundle.js',
        chunkFilename: 'sdk/chunks/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        (mode == 'development' && new TypedCssModulesPlugin()),
        (mode == 'production' && new MiniCssExtractPlugin()),
        (mode == 'development' && new ReactRefreshWebpackPlugin()),
        (mode == 'production' && new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/favicon.ico',
                    to: 'favicon.ico'
                }
            ]
        })),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        }),
    ].filter(Boolean),
    optimization: {
        splitChunks: false
    }
} satisfies Configuration;

export default config;