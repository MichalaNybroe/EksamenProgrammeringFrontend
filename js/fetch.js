async function postPutFetch(method, url, body) {

  return await fetch(url, {
    method: method,
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(body)
  }).then(response => response.json()).catch(reason => alert(reason));
}

async function  deleteFetch(url) {

  return await fetch(url, {
    method: "DELETE"
  }).catch(reason => alert(reason));
}

function getFetch(url) {
  return fetch(url).then(response => response.json()).catch(reason => alert(reason));
}
