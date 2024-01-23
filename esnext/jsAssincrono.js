
// USANDO PROMISES
function buscarUsuariosPromise() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            reject(response)
          }
  
          return response.json();
        })
        .then(usuarios => {
          resolve(usuarios);
        })
        .catch(erro => {
          reject(erro);
        });
    });
  }
  
  buscarUsuariosPromise()
    .then(usuarios => {
      console.log('Usuários (Promise pura):', usuarios);
    })
    .catch(erro => {
      console.error('Erro ao buscar usuários (Promise pura):', erro);
    });
  
  // THEN e CATCH
  const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => console.log(users)).catch((error) => console.log(error))
  }
  
  // async function getUsersAsyncAwaitFn() {}
  const getUsersAsyncAwait = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await response.json()
  
      if (data.status === 404) {
        showModal('Usuário não encontrado')
      }
  
      if (data.status === 401) {
        showModal('Você não está autorizado.')
      }
  
      console.log(data)
    } catch (error) {
      showModal('Houve um error interno, tento novamente mais tarde')
    }
  }
  