/**
 * @author prajwalmr62
 * contact selectors
 */

/**
 * get contact list 
 * @param {Object} state contact state 
 * @param {string} association optional, gets specified association only. 
 */
export const getContacts = (state, association)  =>{
    if(association){
        if(association === "*"){
            return state.allContacts.filter(contact => contact.association);
        }
        return state.allContacts.filter(contact => contact.association === association);
    }
    return [...state.allContacts];
}

export const getUnidentifiedContacts = (state)  =>{
        return state.allContacts.filter(contact => !contact.association);
}

export const getUnidentifiedCount = (state) => state.unidentifiedContactsCount;