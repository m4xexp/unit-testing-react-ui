import { themes } from './index';
import { IBaseTheme } from './base';

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: IBaseTheme): IMappedTheme => {
  return {
    '--color-primary': variables.colorPrimary || '',
    '--background-primary': variables.backgroundPrimary || '',
  };
};

export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }
    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (
  extending: IBaseTheme,
  newTheme: IBaseTheme
): IBaseTheme => {
  return { ...extending, ...newTheme };
};
