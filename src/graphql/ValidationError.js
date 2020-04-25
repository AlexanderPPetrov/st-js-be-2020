import { GraphQLError } from 'graphql';

class ValidationError extends GraphQLError {

    constructor(errors){
        super('Request failed');

        this.validationErrors = {};

        // Expected format for errors
        // [{
        //     key: "email",
        //     message: "email_not_valid"
        // }]

        errors.forEach(error => {
            if(!this.validationErrors[error.key]){
                this.validationErrors[error.key] = [error.message];
            }else{
                this.validationErrors[error.key].push(error.message)
            }
        })

    }

}

export default ValidationError;