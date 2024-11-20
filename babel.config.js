module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel', // For NativeWind
      require.resolve('expo-router/babel'), // For Expo Router
    ],
  };
};
