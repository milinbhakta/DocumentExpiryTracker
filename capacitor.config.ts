import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'react.ts.app',
  appName: 'react-ts-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
