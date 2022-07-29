import React from 'react';

let e = React.createElement;

export default class Login extends React.Component {
    render() {
        return e('div', { className: 'card w-50' },
            e('h3', {className: 'container', id: 'h3'}, 'Log In'),
            e('div',
                { className: 'card-body ', align: 'center' },
                e('form',
                    { className: 'form form-control' },
                    e('input',
                        { type: 'text', placeholder: 'UserName' },
                    ),
                    e('br', {}, null),
                    e('input',
                        { type: 'text', placeholder: 'Password' },

                    ),
                    e('div', 
                        {className: 'card-footer'},
                        e('button',
                            { className: ' btn btn-primary' },
                            'Submit'),
                    )
                )
            ),


        );
    }
}