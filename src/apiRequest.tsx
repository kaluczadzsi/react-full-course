/* eslint-disable no-unsafe-finally */
const apiRequest = async (
  url: RequestInfo = '',
  optionsObj: RequestInit = {},
  errMsg: string | null = ''
) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw new Error('Please reload the app');
  } catch (err: unknown) {
    if (err instanceof Error) {
      errMsg = err.message;
    }
  } finally {
    return errMsg;
  }
};

export default apiRequest;
