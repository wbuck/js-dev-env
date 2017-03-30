import 'whatwg-fetch';

export function getUsers()
{
    return get( 'users' );
}

function onSuccess( res )
{
    return res.json();
}
function onError( err )
{
    console.log( err ); // eslint-disable-line no-console
}

function get( url )
{
    return fetch( url ).then( onSuccess, onError );
}
