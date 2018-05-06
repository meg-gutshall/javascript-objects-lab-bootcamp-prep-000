var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = 1,
  recipes.prop2 = 2
<<<<<<< HEAD
  
=======
>>>>>>> 7cc12995c98bef603e79e6e33ef8bf2a5fbe4e21
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var clone2 = delete object[key];
  return clone2;
}
=======
  var obj = {prop: 1}
  var newObj = deleteFromObjectByKey(obj, 'prop')
  
  return newObj
  return obj
}
>>>>>>> 7cc12995c98bef603e79e6e33ef8bf2a5fbe4e21
