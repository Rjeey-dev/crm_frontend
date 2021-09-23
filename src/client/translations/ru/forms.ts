export const forms = {
    "login": {
        "links": {
            "create_new_account": "создать новую учетную запись",
            "forgot_password": "забыли пароль?"
        },
        "spans": {
            "not_a_member": "не участник?"
        }
    },
    "signup": {
        "links": {
            "forgot_password": "забыли пароль?"
        },
        "spans": {
            "agree_with_terms": "я согласен с условиями",
            "already_have_an_account": "уже есть аккаунт?"
        }
    },
    "remindpassword": {
        "links": {
            "create_new_account": "создать новую учетную запись"
        },
        "spans": {
            "not_a_member": "не участник?",
            "already_have_an_account": "уже есть аккаунт?"
        }
    },
    "profileedit": {
        fields: {
            email: {
                description: "email должен быть подтвержден, если он будет изменен"
            }
        }
    },
    "contactus": {
        fields: {
            name: {
                description: "пожалуйста, отправьте свой логин или имя Instagram, или имя в Facebook, или имя вконтакте или адрес электронной почты"
            },
            text: {
                description: "пожалуйста, полностью опишите свой вопрос"
            }
        }
    },
    'request_pro_traveler_status': {
        fields: {
            email: {
                description: "пожалуйста, отправьте нам свой email для связи. Email адрес обязателен"
            },
            phone: {
                description: "пожалуйста, отправьте нам свой номер телефона для связи. Номер телефона обязателен"
            },
            documents: {
                description: "пожалуйста, пришлите нам копию документов, таких как удостоверение личности или паспорт"
            },
        }
    }
};