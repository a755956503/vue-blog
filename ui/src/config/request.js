
export default class Request {
  static async post(url, data, headers) {
    const result = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
  static async get(url) {
    try {
      let data;
      const result = await fetch(url, { 
        method: 'GET',
      });
      if (result.ok) {
        data = await result.json();
        if (parseInt(data.code) === 0) {
          return data.result;
        } else {
          throw new Error(data.error);
        }
      } else {
        throw new Error('网络错误');
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

// export const a = 2;
// const b = 3;
// export default b;