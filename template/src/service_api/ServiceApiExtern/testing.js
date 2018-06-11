import Client from '@/api/api_extern';

export default {
  // service for getting employees
  async getDataFromServer() {
    return Client.get('/posts')
      .then(response => response.data)
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // eslint-disable-next-line
          console.log(
            'The request was made and the server responded with a status code != 2xx',
            error.response,
          );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // eslint-disable-next-line
          console.log(
            'The request was made but no response was received',
            error.request,
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          // eslint-disable-next-line
          console.log(
            'Something happened in setting up the request that triggered an Error',
            error.message,
          );
        }
        // eslint-disable-next-line
        console.log(error.config);
      });
  },
};
