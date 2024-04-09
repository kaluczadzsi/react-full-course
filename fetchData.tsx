import { URL } from './constants/url';
import { Option } from './types/option';

export const fetchData = async (option: Option) => {
  try {
    const response = await fetch(`${URL}/${option}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
