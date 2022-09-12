let chessBoard = '';
let size = 8
for(let countLines = 0; countLines < size; countLines ++)
{
     for(let countChars = 0; countChars < size; countChars++)
    {
        if(countLines % 2 === 0){
            chessBoard += ' #';
        } else {
            chessBoard += '# ';
        }
    }
    chessBoard += '\n';
}
console.log(chessBoard);