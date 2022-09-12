export interface ICount {
  type: string;
  payload: ICountPayload;
}

export interface ICountPayload {
  counter: number;
}

export const initialState: ICountPayload = {
  counter: 0,
};
