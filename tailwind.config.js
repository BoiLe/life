const defaultColors = require("tailwindcss/colors");
const COLORS = {
  success: {
    100: "#E9F6EC",
    200: "#DFFCE6",
    300: "#88CE97",
    400: "#28A745",
    500: "#20913A",
  },
  info: {
    100: "#E5F2FF",
    200: "#CCE7FF",
    300: "#72B7FB",
    400: "#2395FF",
    500: "#0184FF",
  },
  warning: {
    100: "#FEF6E9",
    200: "#FCF0CB",
    300: "#F8CE8B",
    400: "#FFC107",
    500: "#F3A72E",
  },
  error: {
    100: "#FDEBE9",
    200: "#FCE6EA",
    300: "#F17585",
    400: "#EB3B5B",
    500: "#DA072D",
  },
  primary: {
    1: '#1A6DE3',
    2: '#0051CD',
  },
  secondary: {
    1: '#F59E0B',
    2: '#FCD34D',
  },
  accent: {
    1: '#B5076B',
    2: '#A70000',
    3: '#F33240',
    4: '#FF8900',
    5: '#FFC400',
    6: '#28A745',
    7: '#00875A',
    8: '#0C9AB2',
    9: '#2684FF',
    10: '#034A93',
    11: '#5243AA',
    12: '#42526E',
  },
  background: {
    1: '#FFE2F3',
    2: '#FFE7E7',
    3: '#FFEDEE',
    4: '#FFF1D7',
    5: '#FFFAEA',
    6: '#F2FCF5',
    7: '#D5F2E8',
    8: '#C3EAF0',
    9: '#D7E8FF',
    10: '#CADDF1',
    11: '#DFDCF3',
    12: '#DEE3EC',
  },
  tertiary: {
    1: '#005F59',
    2: '#00A198',
    3: '#A4EEEA',
    4: '#E3F5F4',
    5: '#F8FBFB',
  },
  quaternary: {
    1: '#D98905',
    2: '#ED970B',
    3: '#FFA004',
    4: '#FFB741',
    5: '#FDC871',
  },
  'neutral-1': {
    900: '#2C333A',
    800: '#1F3B53',
    700: '#475765',
    600: '#6B7280',
    500: '#8E9BA6',
    400: '#A7B1BA',
    300: '#BCC4CC',
    200: '#D0D7DD',
    100: '#DEE1E4',
    50: '#DDE2E9',
  },
  'neutral-2': {
    300: '#DAE0E6',
    200: '#E2E7ED',
    100: '#E9EDF2',
    50: '#F2F4F7',
  },
  'neutral-3': {
    300: '#E3E6E9',
    200: '#EBEDEF',
    100: '#F0F1F3',
    50: '#F8F9FB',
  },
  gradient: {
    1: {
      start: "#0051CD",
      // mid:'',
      end: "#3E89FC",
    },
    2: {
      start: "#0051CD",
      // mid:'',
      end: "#3E89FC",
    },
  },


}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
        "heading-1": ["40px", "53px"],
        "heading-2": ["32px", "43px"],
        "heading-3": ["28px", "37px"],
        "heading-4": ["24px", "32px"],
        "heading-5": ["16px", "27px"],
        "header-1": ["20px", "28px"],
        "header-2": ["18px", "28px"],
        "body-1": ["16px", "24px"],
        "body-2": ["14px", "20px"],
        "title-1": ["16px", "24px"],
        "title-2": ["14px", "24px"],
        "caption-1": ["13px", "20px"],
        "caption-2": ["12px", "16px"],
        "display-1": "80px",
        "display-2": "72px",
        "display-3": "64px",
        "display-4": "56px",
        "display-5": "48px",
        "display-6": "40px",
      },
      fontFamily: {
        VampiroOne: ['Vampiro One'],
        Prata: ['Prata']
      },
      backgroundImage: {
        'intro': "url('/src/img/main/index/section1-banner.png')",
        'banner2': "url('/src/img/main/index/section3-banner2.png')",
        'introTour': "url('/src/img/header/bannerTour.png')",
        'banner': "linear-gradient(90deg, rgba(88, 255, 227, 0.9) -13%, rgba(137, 253, 235, -11.4375) 100.52%, rgba(166, 255, 240, 0.365964) 100.35%, rgba(241, 255, 253, 0) 95.98%);",
        'banner3':"url('/src/img/main/banner2.png')",
        'title': "linear-gradient(116.26deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 245, 245, 0) 136.61%);",
        'card': "linear-gradient(180deg, rgba(57, 57, 57, 0) 0%, rgba(34, 34, 34, 0.8) 75.78%)",
        'contact-1': "url('/src/img/main/contact1.png')",
        'section-1': "url('/src/img/main/section-4-1.png')",
        'section-2': "url('/src/img/main/section-4-2.png')",
        'section-3': "url('/src/img/main/section-4-3.png')",
        'section-4': "url('/src/img/main/section-4-4.png')",
        'section-5': "url('/src/img/main/section-4-5.png')",
      },
      animation: {
        'header': 'spin 300ms ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '20px 20px 59px 11px rgba(0, 0, 0, 0.07)',
        '1-xl': '0px 1px 15px rgba(29, 45, 73, 0.14)',
        '1-xl-button': '0px 1px 8px rgba(29, 45, 73, 0.14)',
        '2-xl': '0px 1px 10px rgba(29, 45, 73, 0.102)',
        'dataviz': '0px 0px 2px rgba(66, 52, 52, 0.8)',

      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};