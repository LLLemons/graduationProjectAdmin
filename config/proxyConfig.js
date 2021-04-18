const devPath = 'http://175.24.95.135:7001/';
export default {
  '/api/': {
    target: devPath,
    changeOrigin: false
  },
  '/public/': {
    target: devPath,
    changeOrigin: false
  }
};
