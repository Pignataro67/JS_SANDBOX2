/**   
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Pat P
 * @license MIT
 * 
**/

class EasyHTTP {
  
  // Make an HTTP GET Request  
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

// Make an HTTP POST Request
async post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }); 
  
  const resData = await response.json();
  return resData;

}

  // Make a HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }) 
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
}