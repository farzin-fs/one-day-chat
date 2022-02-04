import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import ApolloProvider from './src/graphql';
import { Navigation } from './src/screens';
import { AppStoreProvider, DraftStoreProvider } from './src/stores';
import { darkTheme, lightTheme } from './src/themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppStoreProvider>
      <DraftStoreProvider>
        <ApolloProvider>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Navigation />
          </ThemeProvider>
        </ApolloProvider>
      </DraftStoreProvider>
    </AppStoreProvider>
  );
};

export default App;
