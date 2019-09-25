export default class Data {
    api(path, method='GET',body = null) {
        const url = 'http://localhost:5000/api' + path;

        const options = {
            method,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          };

        if (body !== null)
            options.body = JSON.stringify(body);
        
        return fetch(url,options);
    }

    async getUser() {
        const res = await this.api(`/users`, 'GET', null);
        if (res.status === 200) 
          return res.json().then( (data) => data);
        else if (res.status === 401) 
          return null;
        else {
          throw new Error();
        }
      }
      
    async createUser(user) {
        const response = await this.api('/users', 'POST', user);
        if (response.status === 201) 
            return [];
        else if (response.status === 400) {
            return response.json().then( (data) => {
                return data.errors;
            });
        }
        else 
            throw new Error();
    }
}