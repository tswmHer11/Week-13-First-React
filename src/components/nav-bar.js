import React from 'react';
import Login from './login-form';

let e = React.createElement;

export default class NavigationBar extends React.Component {
    render() {
        return e('div',
            { className: 'container'},
            e('div',
                { className: 'row bg-light', id: 'nav-bar'  },
                e('div',
                    { className: ' col-sm-3' },
                    e('a',
                        { className: 'navBar-brand', href: '#' },
                        'NavBar')
                ),
                e('div',
                    { className: 'col-sm-3 center' },
                    e('a',
                        { className: 'nav-item nav-link', href: "#" },
                        'Home'),
                ),
                e('div',
                    { className: 'col-sm-3 center' },
                    e('a',
                        { className: 'nav-item nav-link', href: "#" },
                        'About'),
                ),
                e('div',
                    { className: 'col-sm-3 center' },
                    e('a',
                        { className: 'nav-item nav-link', href: "#" },
                        'Contact')
                )
            ),
            e('div',
                {id: 'login-box'},
                e(Login, {}, null)
            )
        )

    }
}