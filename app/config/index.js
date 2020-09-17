import colors from './colors';
import local from './local';
import fontWeights from './fontWeights';
import accessibilityStrings from './accessibilityStrings';
import routes from './routes';
import strings from './strings';

const config = {
  colors,
  ...local,
  fontWeights,
  accessibilityStrings,
  routes,
  strings,
};

export default config;
