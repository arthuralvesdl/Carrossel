var balls = document.querySelector( '.balls' );
var quant = document.querySelectorAll( '.image' );
var atual = 0;
var imagem = document.getElementById( 'first' );
var next = document.getElementById( 'next' );
var back = document.getElementById( 'back' );
var roll = true;

for ( let i = 0;i < quant.length;i++ ) {
    var div = document.createElement( 'div' );
    div.id = i;
    balls.appendChild( div );

}
document.getElementById( '0' ).classList.add( 'firstImage' );

var pos = document.querySelectorAll( '.balls div' );

for ( let i = 0;i < pos.length;i++ ) {
    pos[i].addEventListener( 'click', () => {
        atual = pos[i].id;
        roll = false;
        slide();
    } );
}

back.addEventListener( 'click', () => {
    atual--;
    roll = false;
    slide();
} );

next.addEventListener( 'click', () => {
    atual++;
    roll = false;
    slide();
} );

function slide () {
    if ( atual >= quant.length ) {
        atual = 0;
    }
    else if ( atual < 0 ) {
        atual = quant.length - 1;
    }

    document.querySelector( '.firstImage' ).classList.remove( '.firstImage' );

    imagem.style.marginLeft = -1024 * atual + 'px';

    document.getElementById( atual ).classList.add( 'firstImage' );
}

setInterval( () => {
    if ( roll ) {
        atual++;
        slide();
    } else {
        roll = true;
    }

}, 4000 );