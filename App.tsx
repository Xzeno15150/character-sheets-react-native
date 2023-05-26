import { MD3Theme, Provider as PaperProvider } from 'react-native-paper';
import { ColorSchemeName, useColorScheme } from 'react-native';
import AppRoute from './src/navigation/AppRoute';
import { Provider as ReduxProvider} from "react-redux";
import { store } from './src/redux/store';
import { AppLightTheme } from './src/themes/AppLightTheme';
import { AppDarkTheme } from './src/themes/AppDarkTheme';

export default function App() {
  const colorScheme : ColorSchemeName = useColorScheme();

  const theme : MD3Theme = colorScheme === 'dark' ? AppDarkTheme : AppLightTheme

  return (
    <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
            <AppRoute />
        </ReduxProvider>
    </PaperProvider>
  );
}
