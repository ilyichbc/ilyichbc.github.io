import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '伊里奇星云',
  subtitle: 'ILYICH STARWARD',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 255,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'https://t.mwm.moe/fj', //'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // 显示横幅图片的版权文字
      text: '',              // 显示的版权文字
      url: ''                // （可选）原始艺术品或艺术家页面的 URL 链接
    }
  },
  favicon: [    // 将此数组留空以使用默认图标
    // {
    //   src: '/favicon/icon.png',    // 图标的路径，相对于 /public 目录
    //   theme: 'light',              // （可选）“light”或“dark”，仅当您在亮模式和暗模式下有不同的图标时才设置
    //   sizes: '32x32',              // （可选）图标的大小，仅当您有不同大小的图标时才设置
    // }
    {
      src: '/favicon/favicon-light.png',
      theme: 'light',
    },
    {
      src: '/favicon/favicon-dark.png',
      theme: 'dark',
    }
    
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/ilyichbc',     // 内部链接不应包含基本路径，因为它会自动添加
      external: true,                               // 显示外部链接图标并将在新选项卡中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '/avatar/avatar.png',  // 相对于 /src 目录。如果目录以“/”开头，则相对于 /public 目录
  name: '伊里奇',
  bio: '『梦想是什么，梦想是现实的延续；现实是什么，现实是梦想的终结』',
  links: [
    {
      name: 'Bilibili',
      icon: 'fa6-brands:bilibili',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://space.bilibili.com/1171210254',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/ilyichbc',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
