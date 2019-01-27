/**
 * @author prajwalmr62
 * application selectors export file.
 */

// selector imports
import * as userSelectors from "./user/selectors";
import * as contactsSelectors from "./contacts/selectors";

/**
 * This is for defining scope of selectors. i.e. User selector will be obtaining only state
 * related to user object of the state.
 * @param {object} selectors selectors object imported from selector files.
 * @param {string} scopeId Id of scope to which selector should be limited.
 */
const scopeDefiner = (selectors, scopeId) =>
  Object.keys(selectors).reduce((prev, key) => {
    return {
      ...prev,
      [key]: (state, ...args) => selectors[key](state[scopeId], ...args)
    };
  }, {});

// get redefined selectors
const user = scopeDefiner(userSelectors, 'user');
const contacts = scopeDefiner(contactsSelectors, 'contacts');

export default {
    user,
    contacts
}