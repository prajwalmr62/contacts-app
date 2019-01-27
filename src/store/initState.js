/**
 * @author prajwalmr62
 * initial state of store. This file is being referred in reducers to
 * fetch their initial state, if not present.
 */

export default {
    user: {
        username: 'Joanne.124',
        accountType: 'user',
        firstName: 'Joanne',
        lastName: 'Smith'
    },
    contacts: {
        allContacts : [],
        unidentifiedContactsCount: 0,
    }
}