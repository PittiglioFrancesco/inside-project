export const handlingResponse = (data) => {
  const response = { error: '' };
  if (data && !/ok/i.test(data.statusText)) {
    switch (data.status) {
    case 401:
      data.type = 'Unauthorized';
      break;
    case 404:
      data.type = 'Not Found';
      break;
    case 500:
      data.type = 'ServerError';
      break;
    default:
      data.type = 'Invalid Data';
      break;
    }
    return { response, error: data };
  }
  return { response: data };
};