const isEnv: any = import.meta.env.VITE_STATUS_PROJECT;
const projectStatus: any = import.meta.env.env.VITE_NODE_ENV;
const URL_ENDPOINTS = isEnv === 'production' ? '' : '';

const Constants = {
  API_ENDPOINT: `${URL_ENDPOINTS}/api`,
  SCREEN_SIZE: {
    SSS: 320,
    SS: 360,
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
  },
  KEY_MAP:
    projectStatus === 'development' ? '' : isEnv === 'production' ? '' : '',
};
export default Constants;
