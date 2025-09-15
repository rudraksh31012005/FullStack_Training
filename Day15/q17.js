function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? parentKey + "." + key : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

let nested = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  },
  age: 25
};

console.log(flattenObject(nested));
