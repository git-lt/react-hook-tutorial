import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'qie-demo-react',
        dll: false,

        routes: {
          exclude: [/components\//, /store\//],
        },
        links: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
          },
        ],
      },
    ],
  ],
};

export default config;
