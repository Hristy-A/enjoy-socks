const ct = {
  json: {
    'Content-Type': 'application/json',
  },
};

function saveSock(sock) {
  if (localStorage.length) {
    localStorage.setItem(localStorage.length, JSON.stringify(sock));
  } else {
    localStorage.setItem('0', JSON.stringify(sock));
  }
}

if (localStorage.length) sendSocks();

async function sendSocks() {
  if (!localStorage.length) return;

  const data = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data.push(localStorage.getItem(key));
  }

  const response = fetch(link, {
    method: 'POST',
    headers: ct.json,
  });

  if (response.ok) {
    const result = (await response.json());
  }
}
