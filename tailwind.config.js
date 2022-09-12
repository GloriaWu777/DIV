// @type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  
  theme: {
    fontSize: {
      'supertiny':'0.82em',
      'tiny': '0.875em',
      'base': '1em',
      'lg': '1.25em',
      'xl': '1.5em',
      'xxl': '1.75em',
      'huge': '2.5em',
    },
    
    
    scale: {
      '105':'1.05',
      '110':'1.1',
      '120': '1.2',
      '130': '1.3',
      '140': '1.4',
      '150': '1.5',
      '200': '2',
      '90': '0.9',
      '97': '0.97',
      '1000': '10'
    },
    borderWidth: {
      DEFAULT:'1px',
    },
    extend: {
      colors: {
        darkest: '#191919',
        darker:'#999999',
        gray: '#b8b8b8',
        secondary:'#1d1d1d',
        assistant:'#3FA9F5',
        split:'#dddddd',
        authors_cl: '#666666',
        lightblue:'#3FA9F5',

      },
      fontFamily: {
        body: ['PingFang SC'],
      },
      keyframes: {
        protrude: {
          from: {opacity: 0},
          to: {opacity:1}
        }
      },
      animation: {
        protrude: 'protrude 3s ease-in-ease-out'
      },

      transitionDuration: {
          '400':'400ms',
      },

      backgroundImage: {
        'banner': "url('/src/assets/images/news_detail_banner.png')",
        'project1_banner': "url('/src/assets/images/1111.png')",
        'project2_banner': "url('/src/assets/images/2222.png')",
        'project3_banner': "url('/src/assets/images/3333.png')",
        'project4_banner': "url('/src/assets/images/4444.png')",
        'project5_banner': "url('/src/assets/images/5555.png')",
        'project6_banner': "url('/src/assets/images/6666.png')",
        'publications_banner': "url('/src/assets/images/courses/2.png')",
        'renxipei': "url('/src/assets/images/members/renxipei.png')",
        'yubin': "url('/src/assets/images/members/yubin.png')",
        'lizhuyin': "url('/src/assets/images/members/lizhuyin.png')",
        'pansibo': "url('/src/assets/images/members/pansibo.png')",
        'handongjun': "url('/src/assets/images/members/handongjun.png')",
        'wuxiaoyi': "url('/src/assets/images/members/wuxiaoyi.png')",
        'liuxinyue': "url('/src/assets/images/members/liuxinyue.png')",
        'zourenyao': "url('/src/assets/images/members/zourenyao.png')",
        'zhangxiaoyu': "url('/src/assets/images/members/zhangxiaoyu.png')",
        'litianyi': "url('/src/assets/images/members/litianyi.png')",
        'lianchengbo': "url('/src/assets/images/members/lianchengbo.png')",
        'zhenyaqi': "url('/src/assets/images/members/zhenyaqi.png')",
        'hanwutong': "url('/src/assets/images/members/hanwutong.png')",
        'caiwei': "url('/src/assets/images/members/caiwei.png')",
        'heyuqi': "url('/src/assets/images/members/heyuqi.png')",

        'guozhifan': "url('/src/assets/images/members/guozhifan.png')",
        'sunxiaoqing': "url('/src/assets/images/members/sunxiaoqing.png')",
        'liuzhao': "url('/src/assets/images/members/liuzhao.png')",
        'cuiwenting':"url('/src/assets/images/members/cuiwenting.png')",
        'zhuyujia': "url('/src/assets/images/members/zhuyujia.png')",
        'limuyang': "url('/src/assets/images/members/limuyang.png')",
        'baixinhui':"url('/src/assets/images/members/baixinhui.png')",
        'zhaoronghui': "url('/src/assets/images/members/zhaoronghui.png')",
        'qiuchunman': "url('/src/assets/images/members/qiuchunman.png')",
        'yanran':"url('/src/assets/images/members/yanran.png')",
        'mayurui':"url('/src/assets/images/members/mayurui.png')",



        'homepage_banner':"url('/src/assets/images/homepage_banner.png')",
        'homepage_banner2':"url('/src/assets/images/2222.png')",
        'homepage_banner3':"url('/src/assets/images/4444.png')",
        'gradient_cover':"url('/src/assets/images/gradient_cover.png')",
        // 'homepage_banner2':"url('/src/assets/images/homepage_banner2.png')",
        // 'homepage_banner3':"url('/src/assets/images/homepage_banner3.png')",
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '96':'0.96',
        '97':'0.97',
        '98':'0.98',
      },

      backgroundPosition: {
        'left-4':'center left -2rem',
      },

      cursor: {
        'download': "url('/src/assets/images/download.svg'), auto",
        'link': "url('/src/assets/images/article_link_icon.svg'), auto",
        'nolink':"url('/src/assets/images/nolink.svg'), auto",
        'dragscroll':"url('/src/assets/images/drag_scroll_icon.svg'), auto",
      },

      lineHeight: {
        'extra-loose': '2.75',
        '16': '4rem',
      },
      screens: {
        '750': '750px',
        'll': '1140px',
        'mdtolg': '850px',
        '880': '880px',
        '1440': '1440px',
      }
      
      
    },
  },

  variants: {
    extend: {
      fontStyle:['hover', 'focus']

    },
  },
  plugins: [],
}
