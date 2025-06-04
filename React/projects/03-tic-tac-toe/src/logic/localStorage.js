export const setLocalStorgae = function (board, turn) {
        // guardar partida
        window.localStorage.setItem('board', JSON.stringify(board));
        window.localStorage.setItem('turn', turn);
}

export