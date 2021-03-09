/**
 * Removes css classes from object.
 * @param {object} domObject
 * @param {[string]} classNames
 */
const removeClasses = (domObject, classNames) => {
  if (domObject === null || domObject === undefined || classNames.Length === 0)
    return;

  classNames.forEach((className) => {
    domObject.classList.remove(className);
  });
};

/**
 * Adds css classes to object.
 * @param {object} domObject
 * @param {[string]} classNames
 */
const addClasses = (domObject, classNames) => {
  if (domObject === null || domObject === undefined || classNames.Length === 0)
    return;

  classNames.forEach((className) => {
    domObject.classList.add(className);
  });
};

/**
 * Sets InnerHTML of object.
 * @param {object} domObject
 * @param {string} text
 */
const setInnerHTML = (domObject, text) => {
  if (domObject === null || domObject === undefined) return;

  domObject.innerHTML = text;
};

/**
 * Utilities function
 */
export { removeClasses, addClasses, setInnerHTML };
