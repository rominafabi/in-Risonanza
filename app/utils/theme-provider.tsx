import { createContext, useContext, useRef, useState, useEffect } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useFetcher } from '@remix-run/react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const prefersDarkMQ = '(prefers-color-scheme: dark)';
const getPreferredTheme = () => (window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT);

function ThemeProvider({ children, specifiedTheme }: { children: ReactNode; specifiedTheme: Theme | null }) {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }
    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    if (typeof window !== 'object') {
      return null;
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = useRef(false);
  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistThemeRef.current.submit({ theme }, { action: 'action/set-theme', method: 'post' });
  }, [theme]);
  
  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('OPS.useTheme must be used within a ThemeProvider');
  }
  return context;
}

const clientThemeCode = `
;(() => {
  // ...

  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let Matt know you're seeing this message? Thanks!",
    );
  }
})();
`;

function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  const [theme] = useTheme();
  return (<>
  <meta name="color-scheme" content={theme === 'light' ? 'light dark' : 'dark light'} />
  {ssrTheme ? null : <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />}
  </>);
}

const themes: Array<Theme> = Object.values(Theme);

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && themes.includes(value as Theme);
}


export { isTheme ,Theme, ThemeProvider, useTheme, NonFlashOfWrongThemeEls};
