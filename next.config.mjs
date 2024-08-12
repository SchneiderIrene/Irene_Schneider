// next.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    // другие конфигурации, если они есть
    // webpack: (config) => {
    //   config.module.rules.push({
    //       test: /\.css$/,
    //       use: ['style-loader', 'css-loader'],
    //   });
    //   // Добавьте другие алиасы по мере необходимости
    //   return config;
    // },
  };


