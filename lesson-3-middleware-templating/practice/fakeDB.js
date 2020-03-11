const dogData = {
  dogs: {
    0: {
      name: 'Grey Wind'
    },
    1: {
      name: 'Ghost'
    },
    2: {
      name: 'Lady'
    },
    3: {
      name: 'Nymeria'
    },
    4: {
      name: 'Summer'
    },
    5: {
      name: 'Shaggy Dog'
    },
  }
}

const fakeDB = (db=dogData) => {

  const all = (key) => {
    const data = db[key];
    if(data !== undefined ){
      return data
    } else {
      return null;
    }
  }

  const find = (key, id) => {
    const table = all(key);
    if(table !== null && table[id] !== undefined ){
      return table[id]
    } else {
      return null;
    }
  }

  return {
    all, find
  }
}

module.exports = fakeDB;
