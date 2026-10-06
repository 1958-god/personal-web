/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

  /* 整站暖色调：米白、奶油色与柔和棕色，降低视觉刺激 */
  html,
  body {
      background-color: #f7f1e8 !important;
      color: #5f554b;
  }

  #theme-simple {
      background-color: #f7f1e8 !important;
      color: #5f554b;
  }

  #theme-simple header,
  #theme-simple nav {
      background-color: #fbf7f0 !important;
      border-color: #e8ddd0 !important;
  }

  #theme-simple footer {
      background-color: #eadfD1 !important;
      border-color: #d8c9b8 !important;
  }

  /* 常见白色背景统一为暖白 */
  #theme-simple .bg-white {
      background-color: #fbf7f0 !important;
  }

  /* 常见黑色背景统一为深暖棕，避免整页出现突兀纯黑 */
  #theme-simple .bg-black {
      background-color: #3f3831 !important;
  }

  #theme-simple .text-black {
      color: #5a5047 !important;
  }

  #theme-simple .text-gray-500,
  #theme-simple .text-gray-600,
  #theme-simple .text-gray-700 {
      color: #776b5f !important;
  }

  #theme-simple .border-gray-100,
  #theme-simple .border-gray-200 {
      border-color: #e8ddd0 !important;
  }

  #theme-simple .blog-item-title {
      color: #8a5f3d;
  }

  .dark #theme-simple .blog-item-title {
      color: #e8c9a8;
  }

  /* 深色模式也保持暖色氛围 */
  .dark body,
  .dark #theme-simple {
      background-color: #2f2a25 !important;
      color: #eadfd3;
  }

  .dark #theme-simple header,
  .dark #theme-simple nav {
      background-color: #3a332d !important;
      border-color: #51473d !important;
  }

  .dark #theme-simple footer {
      background-color: #27221e !important;
      border-color: #51473d !important;
  }

  /* 文本不可选取 */
  .forbid-copy {
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
  }

  #theme-simple #announcement-content {
      /* background-color: #f6f6f6; */
  }

  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  /* 菜单下划线动画 */
  #theme-simple .menu-link {
      text-decoration: none;
      background-image: linear-gradient(#b8794d, #b8794d);
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 0 2px;
      transition: background-size 100ms ease-in-out;
  }

  #theme-simple .menu-link:hover {
      background-size: 100% 2px;
      color: #a8643d;
      cursor: pointer;
  }

  #theme-simple a:hover {
      color: #a8643d;
  }

  ${themeConsoleStyle('simple', CONFIG)}
  `}</style>
}

export { Style }
