export const forms = {
    "login": {
        "links": {
            "create_new_account": "create new account",
            "forgot_password": "forgot password ?"
        },
        "spans": {
            "not_a_member": "not a member ?"
        }
    },
    "signup": {
        "links": {
            "forgot_password": "forgot password ?"
        },
        "spans": {
            "agree_with_terms": "i agree to the terms",
            "already_have_an_account": "already have an account ?"
        }
    },
    "remindpassword": {
        "links": {
            "create_new_account": "create new account"
        },
        "spans": {
            "not_a_member": "not a member ?",
            "already_have_an_account": "already have an account ?"
        }
    },
    "profileedit": {
        fields: {
            email: {
                description: "email has to be validated if it will be changed"
            }
        }
    },
    "contactus": {
        fields: {
            name: {
                description: "please send your login or instagram name, or facebook name, or vk name or email"
            },
            text: {
                description: "please fully describe your question"
            }
        }
    },
    'request_pro_traveler_status': {
        fields: {
            email: {
                description: "please send us email to contact. Email is required"
            },
            phone: {
                description: "please send us phone to contact. Phone is required"
            },
            documents: {
                description: "please send us copy of documents like ID or passport"
            },
        }
    }
};