import base, { IBaseTheme } from './base';
export const DEFAULT_THEME: string = 'base';

export interface IThemes {
  [key: string]: IBaseTheme;
}

export const themes: IThemes = {
  base,
};
