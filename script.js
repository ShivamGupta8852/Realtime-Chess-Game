const boxes = Array.from(document.querySelectorAll(".box"));
const heading = document.querySelector(".heading");
const restart_btn = document.getElementById("restart_btn");
const black_cont = document.getElementById("black_cont");
const White_cont = document.getElementById("White_cont");


let playerturn = "White";
const switchPlayer = () => {
    playerturn = playerturn === "White" ? "Black" : "White";
};

function isCheckMate(){
    KingNextmove.length = 0;
    cuttingPosKing.length = 0;
    rookNextmove.length = 0;
    cuttingPosRook.length = 0;
    bishopNextmove.length = 0;
    cuttingPosBishop.length = 0;
    knightNextmove.length = 0;
    cuttingPosKnight.length = 0;
    piecePawnMove.length = 0;
    crossMovePawn.length = 0;
    QueenNextmove.length = 0;
    cuttingPosQueen.length = 0;
    // check if king have any legal move to get out of check;
    let flag = 0;
    let kingid = findcurrKingPos();
    pieceKingMove(kingid);
    let king = document.getElementById(kingid);
    let child = king.children[0]; 
    for(let i =0; i < KingNextmove.length; i++){
        king.innerHTML = "";
        KingNextmove[i].appendChild(child);
        if(!isKingcheck()){
            king.appendChild(child);
            console.log("nextking",KingNextmove[i]);
            KingNextmove[i].innerHTML = "";
            flag = 1;
            break;

        }
        else{
            king.appendChild(child);
            KingNextmove[i].innerHTML = "";
        }
    }
    for(let i =0; i < cuttingPosKing.length; i++){
        let cuttedEle = cuttingPosKing[i].children[0];
        king.innerHTML = "";
        cuttingPosKing[i].innerHTML = "";
        cuttingPosKing[i].appendChild(child);
        if(!isKingcheck()){
            // console.log("kingnextmove",KingNextmove,"cuttingposking",cuttingPosKing);
            king.appendChild(child);
            console.log("cutking",cuttingPosKing[i]);
            cuttingPosKing[i].innerHTML = "";
            cuttingPosKing[i].appendChild(cuttedEle);
            // KingNextmove.length = 0;
            // cuttingPosKing.length = 0;
            // return false;
            flag = 1;
            break;
        }
        else{
            king.appendChild(child);
            cuttingPosKing[i].innerHTML = "";
            cuttingPosKing[i].appendChild(cuttedEle);
        }
    }
    KingNextmove.length = 0;
    cuttingPosKing.length = 0;

    // check if other pieces have any legal move to get out of check;
    let boxpiece = boxes.filter((box) => box.innerHTML != "" && (box.innerHTML.includes(playerturn)));
    let j = 0;
    for(j; j < boxpiece.length; j++){
        if(boxpiece[j].innerHTML.includes("Rook")){
            pieceRookMove(boxpiece[j].id)
            console.log("rookNextmove",rookNextmove,"cuttingPosRook",cuttingPosRook);
            let child = boxpiece[j].children[0];
            for(let i = 0; i < rookNextmove.length; i++){
                boxpiece[j].innerHTML = "";
                rookNextmove[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Rooknextmove",rookNextmove[i]);
                    rookNextmove[i].innerHTML = "";
                    // rookNextmove.length = 0;
                    // cuttingPosRook.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    rookNextmove[i].innerHTML = "";
                }
            }
            for(let i = 0; i < cuttingPosRook.length; i++){
                let cuttedEle = cuttingPosRook[i].children[0];
                boxpiece[j].innerHTML = "";
                console.log(boxpiece[j],"Rookcutmove",cuttingPosRook[i]);
                cuttingPosRook[i].innerHTML = "";
                cuttingPosRook[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    cuttingPosRook[i].innerHTML = "";
                    cuttingPosRook[i].appendChild(cuttedEle);
                    // rookNextmove.length = 0;
                    // cuttingPosRook.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    cuttingPosRook[i].innerHTML = "";
                    cuttingPosRook[i].appendChild(cuttedEle);
                }                
            }
            rookNextmove.length = 0;
            cuttingPosRook.length = 0;
        }
        if(boxpiece[j].innerHTML.includes("Bishop")){
            pieceBishopMove(boxpiece[j].id);
            console.log("bishopNextmove",bishopNextmove,"cuttingPosBishop",cuttingPosBishop);
            let child = boxpiece[j].children[0];
            for(let i = 0; i < bishopNextmove.length; i++){
                boxpiece[j].innerHTML = "";
                bishopNextmove[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Bishopnextmove",bishopNextmove[i]);
                    bishopNextmove[i].innerHTML = "";
                    // bishopNextmove.length = 0;
                    // cuttingPosBishop.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    bishopNextmove[i].innerHTML = "";
                }
            }
            for(let i = 0; i < cuttingPosBishop.length; i++){
                let cuttedEle = cuttingPosBishop[i].children[0];
                boxpiece[j].innerHTML = "";
                cuttingPosBishop[i].innerHTML = "";
                cuttingPosBishop[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Bishopcutmove",cuttingPosBishop[i]);
                    cuttingPosBishop[i].innerHTML = "";
                    cuttingPosBishop[i].appendChild(cuttedEle);
                    // bishopNextmove.length = 0;
                    // cuttingPosBishop.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    cuttingPosBishop[i].innerHTML = "";
                    cuttingPosBishop[i].appendChild(cuttedEle);
                }                
            }
            bishopNextmove.length = 0;
            cuttingPosBishop.length = 0;
        }
        if(boxpiece[j].innerHTML.includes("Knight")){
            pieceKnightMove(boxpiece[j].id);
            console.log("knightNextmove",knightNextmove,"cuttingPosKnight",cuttingPosKnight);
            let child = boxpiece[j].children[0];
            for(let i = 0; i < knightNextmove.length; i++){
                boxpiece[j].innerHTML = "";
                knightNextmove[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Knightnextmove",knightNextmove[i]);
                    knightNextmove[i].innerHTML = "";
                    // knightNextmove.length =0;
                    // cuttingPosKnight.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    knightNextmove[i].innerHTML = "";
                }
            }
            for(let i = 0; i < cuttingPosKnight.length; i++){
                let cuttedEle = cuttingPosKnight[i].children[0];
                boxpiece[j].innerHTML = "";
                cuttingPosKnight[i].innerHTML = "";
                cuttingPosKnight[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Knightcutmove",cuttingPosKnight[i]);
                    cuttingPosKnight[i].innerHTML = "";
                    cuttingPosKnight[i].appendChild(cuttedEle);
                    // knightNextmove.length =0;
                    // cuttingPosKnight.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    cuttingPosKnight[i].innerHTML = "";
                    cuttingPosKnight[i].appendChild(cuttedEle);
                }                
            }
            knightNextmove.length = 0;
            cuttingPosKnight.length = 0;
        }
        if(boxpiece[j].innerHTML.includes("Pawn")){
            piecePawnMove(boxpiece[j]);
            console.log("pawnNextmove",pawnNextmove,"crossMovePawn",crossMovePawn);
            let child = boxpiece[j].children[0];
            for(let i = 0; i < pawnNextmove.length; i++){
                boxpiece[j].innerHTML = "";
                pawnNextmove[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Pawnnextmove",pawnNextmove[i]);
                    pawnNextmove[i].innerHTML = "";
                    // pawnNextmove.length = 0;
                    // crossMovePawn.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    pawnNextmove[i].innerHTML = "";
                }
            }
            for(let i = 0; i < crossMovePawn.length; i++){
                let cuttedEle = crossMovePawn[i].children[0];
                boxpiece[j].innerHTML = "";
                crossMovePawn[i].innerHTML = "";
                crossMovePawn[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Pawncutmove",crossMovePawn[i]);
                    crossMovePawn[i].innerHTML = "";
                    crossMovePawn[i].appendChild(cuttedEle);
                    // pawnNextmove.length = 0;
                    // crossMovePawn.length = 0;
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    crossMovePawn[i].innerHTML = "";
                    crossMovePawn[i].appendChild(cuttedEle);
                }                
            }
            piecePawnMove.length = 0;
            crossMovePawn.length = 0;
        }
        if(boxpiece[j].innerHTML.includes("Queen")){
            pieceQueenMove(boxpiece[j].id);
            console.log("QueenNextmove",QueenNextmove,"cuttingPosQueen",cuttingPosQueen);
            let child = boxpiece[j].children[0];
            for(let i = 0; i < QueenNextmove.length; i++){
                boxpiece[j].innerHTML = "";
                QueenNextmove[i].appendChild(child);
                if(!isKingcheck()){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j]);
                    console.log(boxpiece[j],"Queennextmove",QueenNextmove[i]);
                    QueenNextmove[i].innerHTML = "";
                    // QueenNextmove.length = 0;
                    // cuttingPosQueen.length = 0
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    QueenNextmove[i].innerHTML = "";
                }
            }
            for(let i = 0; i < cuttingPosQueen.length; i++){
                let cuttedEle = cuttingPosQueen[i].children[0];
                boxpiece[j].innerHTML = "";
                cuttingPosQueen[i].innerHTML = "";
                cuttingPosQueen[i].appendChild(child);
                if(isKingcheck() == false){
                    boxpiece[j].appendChild(child);
                    console.log(boxpiece[j],"Queencutmove",cuttingPosQueen[i]);
                    cuttingPosQueen[i].innerHTML = "";
                    cuttingPosQueen[i].appendChild(cuttedEle);
                    // QueenNextmove.length = 0;
                    // cuttingPosQueen.length = 0
                    // return false;
                    flag = 1;
                    break;
                }
                else{
                    boxpiece[j].appendChild(child);
                    cuttingPosQueen[i].innerHTML = "";
                    cuttingPosQueen[i].appendChild(cuttedEle);
                }                
            }
            QueenNextmove.length = 0;
            cuttingPosQueen.length = 0;
        }
    }

    // KingNextmove.length = 0;
    // cuttingPosKing.length = 0;
    // rookNextmove.length = 0;
    // cuttingPosRook.length = 0;
    // bishopNextmove.length = 0;
    // cuttingPosBishop.length = 0;
    // knightNextmove.length = 0;
    // cuttingPosKnight.length = 0;
    // piecePawnMove.length = 0;
    // crossMovePawn.length = 0;
    // QueenNextmove.length = 0;
    // cuttingPosQueen.length = 0;
    if(flag == 1) return false;
    return true;
    
}

restart_btn.addEventListener('click',()=>{
    boxes.forEach((box) => {
        box.innerHTML = "";
        const boxcol = box.id[0];
        const boxrow = box.id[1];
        if(boxrow == "2")box.appendChild(document.createElement('img')).src = "Media/BlackPawn.png";
        if(boxrow == "7")box.appendChild(document.createElement('img')).src = "Media/WhitePawn.png";
        if(boxrow == "1"){
            if(boxcol == "a" || boxcol == "h")box.appendChild(document.createElement('img')).src = "Media/BlackRook.png";
            if(boxcol == "b" || boxcol == "g")box.appendChild(document.createElement('img')).src = "Media/BlackKnight.png";
            if(boxcol == "c" || boxcol == "f")box.appendChild(document.createElement('img')).src = "Media/BlackBishop.png";
            if(boxcol == "d")box.appendChild(document.createElement('img')).src = "Media/BlackQueen.png";
            if(boxcol == "e")box.appendChild(document.createElement('img')).src = "Media/BlackKing.png";
        }
        if(boxrow == "8"){
            if(boxcol == "a" || boxcol == "h")box.appendChild(document.createElement('img')).src = "Media/WhiteRook.png";
            if(boxcol == "b" || boxcol == "g")box.appendChild(document.createElement('img')).src = "Media/WhiteKnight.png";
            if(boxcol == "c" || boxcol == "f")box.appendChild(document.createElement('img')).src = "Media/WhiteBishop.png";
            if(boxcol == "d")box.appendChild(document.createElement('img')).src = "Media/WhiteQueen.png";
            if(boxcol == "e")box.appendChild(document.createElement('img')).src = "Media/WhiteKing.png";
        }
    })
    playerturn = "White";
    black_cont.innerHTML = "";
    White_cont.innerHTML = "";
    heading.innerHTML = "Chess";
})

const nextMoveColoring = (nextMoveArray) => {
    for (let i = 0; i < nextMoveArray.length; i++) {
        // if (nextMoveArray[i].innerHTML == "") {
            nextMoveArray[i].style.background = "rgba(25, 214, 63, 0.509)"
            nextMoveArray[i].style.border = "3px solid rgba(0, 0, 0, 0.655)";
        // }
    }
}
const crossWhiteMoveColoring = (crossMoveArray) => {
    for (let i = 0; i < crossMoveArray.length; i++) {
        // if (crossMoveArray[i].innerHTML.includes("Black")) {
            crossMoveArray[i].style.background = "orange"
            crossMoveArray[i].style.border = "3px solid rgba(0, 0, 0, 0.655)";
        // }
    }
    
}
const crossBlackMoveColoring = (crossMoveArray) => {
    for (let i = 0; i < crossMoveArray.length; i++) {
        // if (crossMoveArray[i].innerHTML.includes("White")) {
            crossMoveArray[i].style.background = "orange"
            crossMoveArray[i].style.border = "3px solid rgba(0, 0, 0, 0.655)";
        // }
    }
}

const isKingcheck = () => {
    let kingid = findcurrKingPos();
    console.log(kingid);
    let kingrow = kingid.charCodeAt(1);
    let kingcol = kingid.charCodeAt(0);
    let boxpiece = boxes.filter((box) => box.innerHTML != "" && !(box.innerHTML.includes(playerturn)));
    console.log(boxpiece);
    let j = 0;
    for(j; j < boxpiece.length; j++){
        let count = 0;
        let boxid = boxpiece[j].id;
        let boxrow = boxid.charCodeAt(1);
        let boxcol = boxid.charCodeAt(0);
        if(boxpiece[j].innerHTML.includes("Rook")){
            if((Math.abs(boxcol - kingcol) == 1 && (boxrow-kingrow) == 0) || (Math.abs(boxrow - kingrow) == 1 && (boxcol-kingcol) == 0)) return true;
            if(boxcol < kingcol && boxrow == kingrow){
                let i;
                for(i = 1; i <= (kingcol - boxcol - 1); i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol+i) + String.fromCharCode(boxrow));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == kingcol - boxcol-1) return true;
            }
            if(boxcol > kingcol && boxrow == kingrow){
                let i;
                for(i = 1; i <= (boxcol-kingcol -1); i++){
                    let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(boxrow));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == boxcol-kingcol-1) return true;
            }
            if(boxrow < kingrow && boxcol == kingcol){
                let i;
                for(i = 1; i <= (kingrow -boxrow - 1); i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol) + String.fromCharCode(boxrow + i));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == kingrow - boxrow-1) return true;
            }
            if(boxrow > kingrow && boxcol == kingcol){
                let i;
                for(i = 1; i <= boxrow-kingrow-1; i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol) + String.fromCharCode(kingrow + i));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == boxrow-kingrow-1) return true;
            }
        }
        if(boxpiece[j].innerHTML.includes("Bishop")){
            if(Math.abs(boxcol - kingcol) == 1 && Math.abs(boxrow - kingrow) == 1) return true; 
            if(boxcol > kingcol){
                if(boxrow < kingrow && (boxcol+boxrow) == (kingcol+kingrow)){
                    let i;
                    for(i = 1; i <= (boxcol -kingcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(kingrow - i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == boxcol - kingcol-1) return true;
                }
                if(boxrow > kingrow && ((boxcol+boxrow)-(kingcol+kingrow))/2 == (boxcol-kingcol)){
                    let i;
                    for(i = 1; i <= (boxcol -kingcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(kingrow + i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == boxcol - kingcol-1) return true;
                }
            }
            else if(boxcol < kingcol){
                if(boxrow < kingrow && ((kingcol+kingrow)-(boxcol+boxrow))/2 == (kingcol-boxcol)){
                    let i;
                    for(i = 1; i <= (kingcol -boxcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol-i) + String.fromCharCode(kingrow - i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == kingcol - boxcol -1) return true;
                }
                if(boxrow > kingrow && (boxcol+boxrow) == (kingcol+kingrow)){
                    let i;
                    for(i = 1; i <= (kingcol -boxcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol-i) + String.fromCharCode(kingrow + i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == kingcol - boxcol-1) return true;
                }
            }
        }
        if(boxpiece[j].innerHTML.includes("Knight")){
            if(Math.abs(boxcol - kingcol) == 1){
                if(Math.abs(boxrow - kingrow) == 2) return true;
            }
            if(Math.abs(boxcol - kingcol) == 2){
                if(Math.abs(boxrow - kingrow) == 1) return true;
            }
        }
        if(boxpiece[j].innerHTML.includes("Pawn")){
            if(boxpiece[j].innerHTML.includes("White")){
                if(Math.abs(boxcol - kingcol) == 1 && (boxrow - kingrow) == 1) return true;
            }
            if(boxpiece[j].innerHTML.includes("Black")){
                if(Math.abs(boxcol - kingcol) == 1 && (kingrow - boxrow) == 1) return true;
            }
        }
        if(boxpiece[j].innerHTML.includes("Queen")){
            // bishop move of Queen
            if(Math.abs(boxcol - kingcol) == 1 && Math.abs(boxrow - kingrow) == 1) return true; 
            if(boxcol > kingcol){
                if(boxrow < kingrow && (boxcol+boxrow) == (kingcol+kingrow)){
                    let i;
                    for(i = 1; i <= (boxcol -kingcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(kingrow - i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == boxcol - kingcol-1) return true;
                }
                if(boxrow > kingrow && ((boxcol+boxrow)-(kingcol+kingrow))/2 == (boxcol-kingcol)){
                    let i;
                    for(i = 1; i <= (boxcol -kingcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(kingrow + i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == boxcol - kingcol-1) return true;
                }
            }
            else if(boxcol < kingcol){
                if(boxrow < kingrow && ((kingcol+kingrow)-(boxcol+boxrow))/2 == (kingcol+boxcol)){
                    let i;
                    for(i = 1; i <= (kingcol -boxcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol-i) + String.fromCharCode(kingrow - i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == kingcol - boxcol-1) return true;
                }
                if(boxrow > kingrow && (boxcol+boxrow) == (kingcol+kingrow)){
                    let i;
                    for(i = 1; i <= (kingcol -boxcol -1); i++){
                        let betwele = document.getElementById(String.fromCharCode(kingcol-i) + String.fromCharCode(kingrow + i));
                        if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                        else break;
                    }
                    if(count == kingcol - boxcol -1) return true;
                }
            }

            // Rook move of Queen
            if((Math.abs(boxcol - kingcol) == 1 && (boxrow-kingrow) == 0) || (Math.abs(boxrow - kingrow) == 1 && (boxcol-kingcol) == 0)) return true;
            if(boxcol < kingcol && boxrow == kingrow){
                let i;
                for(i = 1; i <= (kingcol - boxcol - 1); i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol+i) + String.fromCharCode(boxrow));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == kingcol - boxcol-1) return true;
            }
            if(boxcol > kingcol && boxrow == kingrow){
                let i;
                for(i = 1; i <= (boxcol-kingcol -1); i++){
                    let betwele = document.getElementById(String.fromCharCode(kingcol+i) + String.fromCharCode(boxrow));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == boxcol-kingcol-1) return true;
            }
            if(boxrow < kingrow && boxcol == kingcol){
                let i;
                for(i = 1; i <= (kingrow -boxrow - 1); i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol) + String.fromCharCode(boxrow + i));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == kingrow - boxrow-1) return true;
            }
            if(boxrow > kingrow && boxcol == kingcol){
                let i;
                for(i = 1; i <= boxrow-kingrow-1; i++){
                    let betwele = document.getElementById(String.fromCharCode(boxcol) + String.fromCharCode(kingrow + i));
                    if(betwele != null && betwele.innerHTML == "") {count++; console.log(count);}
                    else break;
                }
                if(count == boxrow-kingrow-1) return true;
            }
        }
    }
    return false; 
}

const findcurrKingPos = () =>{
    if(playerturn == "White"){
        return boxes.find((box) => box.innerHTML.includes("WhiteKing")).id;
        // return boxes.filter((box) => box.innerHTML.includes("WhiteKing"))[0].id;
    }
    else{
        return boxes.find((box) => box.innerHTML.includes("BlackKing")).id;
        // return boxes.filter((box) => box.innerHTML.includes("BlackKing"))[0].id;
    }
}

function playerwin() {
    let kings = Array.from(boxes.filter(box => box.innerHTML.includes("King")));
    if(kings.filter(ele => ele.innerHTML.includes("White")).length == 0){
        heading.innerHTML = "Black wins !!"
    }
    if(kings.filter(ele => ele.innerHTML.includes("Black")).length == 0){
        heading.innerHTML = "White wins !!";
    }
}

function removalColorPiece(pieceNextMove,pieceCuttingMove){
    for (let i = 0; i < pieceNextMove.length; i++) {
        pieceNextMove[i].removeAttribute("style");
    }
    for (let i = 0; i < pieceCuttingMove.length; i++) {
        pieceCuttingMove[i].removeAttribute("style");
    }
}

function removedPieces(box){
    console.log(box);
    if(box.src.includes("Black")){
        black_cont.appendChild(box);
    }
    if(box.src.includes("White")){
        White_cont.appendChild(box);
    }
}

function pieceMovementCode(box,pieceNextMove,parentPiece,pieceCuttingMove){
    let boxCont = box.innerHTML;
    let boxchild = box.children[0];
    for (let i = 0; i < pieceNextMove.length; i++) {
        if (box.id == pieceNextMove[i].id) {
            let parentchild = parentPiece[0].children[0];
            box.appendChild(parentchild);
            parentPiece[0].innerHTML = "";
            if(isKingcheck()){
                box.innerHTML = "";
                parentPiece[0].appendChild(parentchild);
                heading.innerHTML = `${"invalid move of " + playerturn}`; 
            }
            else{
            switchPlayer();
            playerwin();
            // console.log(isKingcheck());
            if(isKingcheck()){
                if(isCheckMate()) heading.innerHTML = `${playerturn=="White"?"Black":"White"} win`;
                else heading.innerHTML = `${playerturn} is in check !!`;
            }
            else heading.innerHTML = "Chess";
            // if(isKingcheck()) {checkAndcheckmate()}
            // else heading.innerHTML = "Chess";
            }
        }
    }
    for (let i = 0; i < pieceCuttingMove.length; i++) {
        if (box.id == pieceCuttingMove[i].id) {
            if (((parentPiece[0].innerHTML.includes("White") && box.innerHTML.includes("Black")) || (parentPiece[0].innerHTML.includes("Black") && box.innerHTML.includes("White")))) {
                let parentchild = parentPiece[0].children[0];
                parentPiece[0].innerHTML = "";
                box.innerHTML = "";
                box.appendChild(parentchild);
                // let sideContEle = box;
                if(isKingcheck()){
                    heading.innerHTML = `${"invalid move of " + playerturn}`;
                    parentPiece[0].appendChild(parentchild);
                    box.appendChild(boxchild);
                }
                else{
                boxCont = "";
                removedPieces(boxchild);
                switchPlayer();
                playerwin();
                // console.log(isKingcheck());
                if(isKingcheck()){
                    if(isCheckMate()) heading.innerHTML = `${playerturn=="White"?"Black":"White"} win`;
                    else heading.innerHTML = `${playerturn} is in check !!`;
                }
                else heading.innerHTML = "Chess";
                // if(isKingcheck()) {checkAndcheckmate()}
                // else heading.innerHTML = "Chess";
            }
          }
        }
    }
    pieceCuttingMove.length = 0;
    parentPiece.length = 0;
    pieceNextMove.length = 0;
}

function checkAndcheckmate(){
    heading.innerHTML = playerturn + " is in Check !!";
}

let prevChangeBg = [];
boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (prevChangeBg.length) {
      prevChangeBg[0].removeAttribute("style");
      prevChangeBg.length = 0;
    }
    if ((box.innerHTML.includes("White") || box.innerHTML.includes("Black")) && box.innerHTML.includes(playerturn)) {
        box.style.background = "Yellow";
        prevChangeBg.push(box);
    }
    pawn(box);
    Knight(box);
    rook(box);
    bishop(box);
    king(box);
    queen(box);
  });
});

function piecePawnMove(box){
    const boxid = box.id;
    const char1 = String.fromCharCode(boxid.charCodeAt(0) + 1);
    const char2 = String.fromCharCode(boxid.charCodeAt(0) - 1);
    let crossright = 0;
    let crossleft = 0
    if(box.innerHTML.includes("BlackPawn")){
        crossright = document.getElementById(char1 + (parseInt(boxid[1]) + 1));
        crossleft = document.getElementById(char2 + (parseInt(boxid[1]) + 1));
        if(boxid.includes("2")){
            for(let i = 1; i <=2; i++){
                let ele = document.getElementById(String.fromCharCode(boxid.charCodeAt(0))+(parseInt(boxid[1]) + i));
                if(ele.innerHTML == "") pawnNextmove.push(ele);
            }
        }
        else{
            let ele = document.getElementById(String.fromCharCode(boxid.charCodeAt(0))+(parseInt(boxid[1]) + 1));
            if(ele.innerHTML == "")pawnNextmove.push(ele);
        }
    }
    else if(box.innerHTML.includes("WhitePawn")){
        crossright = document.getElementById(char1 + (parseInt(boxid[1]) - 1));
        crossleft = document.getElementById(char2 + (parseInt(boxid[1]) - 1));
        if(boxid.includes("7")){
            for(let i = 1; i <=2; i++){
                let ele = document.getElementById(String.fromCharCode(boxid.charCodeAt(0))+(parseInt(boxid[1]) - i));
                if(ele.innerHTML == "") pawnNextmove.push(ele);
            }
        }
        else{
            let ele = document.getElementById(String.fromCharCode(boxid.charCodeAt(0))+(parseInt(boxid[1]) - 1));
            if(ele.innerHTML == "")pawnNextmove.push(ele);
        }
    }
    if(crossright != null && crossright.innerHTML != "" && !crossright.innerHTML.includes(playerturn)) crossMovePawn.push(crossright);
    if(crossleft != null && crossleft.innerHTML != "" && !crossleft.innerHTML.includes(playerturn)) crossMovePawn.push(crossleft);
}

// Pawn Move
let pawnNextmove = [];
let parentPawn = [];
let crossMovePawn = [];
function pawn(box) {
            let boxCont = box.innerHTML;
            if (pawnNextmove.length > 0 || crossMovePawn.length > 0) {
                removalColorPiece(pawnNextmove,crossMovePawn);
                pieceMovementCode(box,pawnNextmove,parentPawn,crossMovePawn);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackPawn")) {
                    parentPawn.push(document.getElementById(box.id));
                    piecePawnMove(box);
                    nextMoveColoring(pawnNextmove);
                    crossBlackMoveColoring(crossMovePawn);
                }
                else if ( boxCont.includes(playerturn) && boxCont.includes("WhitePawn")) {
                    parentPawn.push(document.getElementById(box.id));
                    piecePawnMove(box);
                    nextMoveColoring(pawnNextmove);
                    crossWhiteMoveColoring(crossMovePawn);
                }
            }
}

function pieceKnightMove(boxid){
    let knightMoveBoxes =[];
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) + 1) + (parseInt(boxid[1]) + 2)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) - 1) + (parseInt(boxid[1]) + 2)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) + 1) + (parseInt(boxid[1]) - 2)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) - 1) + (parseInt(boxid[1]) - 2)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) + 2) + (parseInt(boxid[1]) + 1)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) + 2) + (parseInt(boxid[1]) - 1)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) - 2) + (parseInt(boxid[1]) + 1)));
    knightMoveBoxes.push(document.getElementById(String.fromCharCode(boxid.charCodeAt(0) - 2) + (parseInt(boxid[1]) - 1)));
    for (let i = 0; i < knightMoveBoxes.length; i++){
        if (knightMoveBoxes[i] != null && !knightMoveBoxes[i].innerHTML.includes(playerturn)){
            if(knightMoveBoxes[i].innerHTML == "") knightNextmove.push(knightMoveBoxes[i]);
            if(knightMoveBoxes[i].innerHTML != "") cuttingPosKnight.push(knightMoveBoxes[i]);
        }
    }
    knightMoveBoxes.length = 0;
}

// Knight Move
const knightNextmove = [];
let parentKnight = [];
let cuttingPosKnight = [];
function Knight(box) {
            let boxCont = box.innerHTML;
            const boxid = box.id;
            if (knightNextmove.length > 0 || cuttingPosKnight.length > 0) {
                removalColorPiece(knightNextmove,cuttingPosKnight);
                pieceMovementCode(box,knightNextmove,parentKnight,cuttingPosKnight);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackKnight")) {
                    parentKnight.push(document.getElementById(boxid));
                    pieceKnightMove(boxid);
                    nextMoveColoring(knightNextmove);
                    crossBlackMoveColoring(cuttingPosKnight);

                }
                else if (boxCont.includes(playerturn) && boxCont.includes("WhiteKnight")) {
                    parentKnight.push(document.getElementById(boxid));
                    pieceKnightMove(boxid);
                    nextMoveColoring(knightNextmove);
                    crossWhiteMoveColoring(cuttingPosKnight);
                }
            }
}

function pieceRookMove(boxid){
    let upele, bottomele, rightele, leftele;
for (let i = 1; i <= 8; i++) {
        upele = document.getElementById(boxid[0] + (parseInt(boxid[1]) - i));
        if(upele != null){
            if(upele.innerHTML == "") rookNextmove.push(upele);
            else{
                if(!upele.innerHTML.includes(playerturn)) {cuttingPosRook.push(upele); break;}
                else break;
            }
        }
        else break;
}
for (let i = 1; i <= 8; i++) {
        bottomele = document.getElementById(boxid[0] + (parseInt(boxid[1]) + i));
        if(bottomele != null){
            if(bottomele.innerHTML == "") rookNextmove.push(bottomele);
            else{
                if(!bottomele.innerHTML.includes(playerturn)) {cuttingPosRook.push(bottomele); break;}
                else break;
            }
        }
        else break;
}
for (let i = 1; i <= 8; i++) {
        let char = String.fromCharCode(boxid.charCodeAt(0) + i);
        rightele = document.getElementById(char + boxid[1]);
        if(rightele != null){
            if(rightele.innerHTML == "") rookNextmove.push(rightele);
            else{
                if(!rightele.innerHTML.includes(playerturn)) {cuttingPosRook.push(rightele); break;}
                else break;
            }
        }
        else break;
}
for (let i = 1; i <= 8; i++) {
        let char = String.fromCharCode(boxid.charCodeAt(0) - i);
        leftele = document.getElementById(char + boxid[1]);
        if(leftele != null){
            if(leftele.innerHTML == "") rookNextmove.push(leftele);
            else{
                if(!leftele.innerHTML.includes(playerturn)) {cuttingPosRook.push(leftele); break;}
                else break;
            }
        }
        else break;
}
}
// function pieceRookMove(boxid){
//     let upele, bottomele, rightele, leftele;

//     for (let i = 1; i <= 8; i++) {
//         if ((parseInt(boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) {
//             upele = document.getElementById(boxid[0] + (parseInt(boxid[1]) - i));
//         }
//         if (upele != null && upele.innerHTML == "") {
//             rookNextmove.push(upele);
//         }
//         else if (upele != null && upele.innerHTML != "") {
//             cuttingPosRook.push(upele);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         if ((parseInt(boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) {
//             bottomele = document.getElementById(boxid[0] + (parseInt(boxid[1]) + i));
//         }
//         if (bottomele != null && bottomele.innerHTML == "") {
//             rookNextmove.push(bottomele);
//         }
//         else if (bottomele != null && bottomele.innerHTML != "") {
//             cuttingPosRook.push(bottomele);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char = String.fromCharCode(boxid.charCodeAt(0) + i);
//         if (char >= "a" && char <= "h") {
//             rightele = document.getElementById(char + boxid[1]);
//         }
//         if (rightele != null && rightele.innerHTML == "") {
//             rookNextmove.push(rightele);
//         }
//         else if (rightele != null && rightele.innerHTML != "") {
//             cuttingPosRook.push(rightele);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char = String.fromCharCode(boxid.charCodeAt(0) - i);
//         if (char >= "a" && char <= "h") {
//             leftele = document.getElementById(char + boxid[1]);
//         }
//         if (leftele != null && leftele.innerHTML == "") {
//             rookNextmove.push(leftele);
//         }
//         else if (leftele != null && leftele.innerHTML != "") {
//             cuttingPosRook.push(leftele);
//             break;
//         }
//     }
// }

// Rook Move
const rookNextmove = [];
let parentRook = [];
let cuttingPosRook = [];
function rook(box) {
            let boxCont = box.innerHTML;
            const boxid = box.id;
            if (rookNextmove.length > 0 || cuttingPosRook.length > 0) {
                removalColorPiece(rookNextmove,cuttingPosRook);
                pieceMovementCode(box,rookNextmove,parentRook,cuttingPosRook);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackRook")) {
                    parentRook.push(document.getElementById(boxid));
                    pieceRookMove(boxid);
                    nextMoveColoring(rookNextmove);
                    crossBlackMoveColoring(cuttingPosRook);
                }
                else if (boxCont.includes(playerturn) && boxCont.includes("WhiteRook")) {
                    parentRook.push(document.getElementById(boxid));
                    pieceRookMove(boxid);
                    nextMoveColoring(rookNextmove);
                    crossWhiteMoveColoring(cuttingPosRook);
                }
            }
}

function pieceBishopMove(boxid){
    let upleft, bottomleft, upright, bottomright;
    for (let i = 1; i <= 8; i++) {
        let char = String.fromCharCode(boxid.charCodeAt(0) - i);
        upleft = document.getElementById(char + (parseInt(boxid[1]) - i));
        if(upleft != null){
            if(upleft.innerHTML == "") bishopNextmove.push(upleft);
            else{
                if(!upleft.innerHTML.includes(playerturn)) {cuttingPosBishop.push(upleft); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char1 = String.fromCharCode(boxid.charCodeAt(0) - i);
        bottomleft = document.getElementById(char1 + (parseInt(boxid[1]) + i));
        if(bottomleft != null){
            if(bottomleft.innerHTML == "") bishopNextmove.push(bottomleft);
            else{
                if(!bottomleft.innerHTML.includes(playerturn)) {cuttingPosBishop.push(bottomleft); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
        upright = document.getElementById(char2 + (parseInt(boxid[1]) - i));
        if(upright != null){
            if(upright.innerHTML == "") bishopNextmove.push(upright);
            else{
                if(!upright.innerHTML.includes(playerturn)) {cuttingPosBishop.push(upright); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
        bottomright = document.getElementById(char2 + (parseInt(boxid[1]) + i));
        if(bottomright != null){
            if(bottomright.innerHTML == "") bishopNextmove.push(bottomright);
            else{
                if(!bottomright.innerHTML.includes(playerturn)) {cuttingPosBishop.push(bottomright); break;}
                else break;
            }
        }
        else break;
    }
}
// function pieceBishopMove(boxid){
//     let upleft, bottomleft, upright, bottomright;
//     for (let i = 1; i <= 8; i++) {
//         let char1 = String.fromCharCode(boxid.charCodeAt(0) - i);
//         if ((parseInt((boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) && (char1 >= "a" && char1 <= "h")) {
//             upleft = document.getElementById(char1 + (parseInt(boxid[1]) - i));
//         }
//         if (upleft != null && upleft.innerHTML == "") {
//             bishopNextmove.push(upleft);
//         } else if (upleft != null && upleft.innerHTML != "") {
//             cuttingPosBishop.push(upleft);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char1 = String.fromCharCode(boxid.charCodeAt(0) - i);
//         if ((parseInt((boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) && (char1 >= "a" && char1 <= "h")) {
//             bottomleft = document.getElementById(char1 + (parseInt(boxid[1]) + i));
//         }
//         if (bottomleft != null && bottomleft.innerHTML == "") {
//             bishopNextmove.push(bottomleft);
//         } else if (bottomleft != null && bottomleft.innerHTML != "") {
//             cuttingPosBishop.push(bottomleft);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
//         if ((parseInt((boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) && (char2 >= "a" && char2 <= "h")) {
//             upright = document.getElementById(char2 + (parseInt(boxid[1]) - i));
//         }
//         if (upright != null && upright.innerHTML == "") {
//             bishopNextmove.push(upright);
//         } else if (upright != null && upright.innerHTML != "") {
//             cuttingPosBishop.push(upright);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
//         if ((parseInt((boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) && (char2 >= "a" && char2 <= "h")) {
//             bottomright = document.getElementById(char2 + (parseInt(boxid[1]) + i));
//         }
//         if (bottomright != null && bottomright.innerHTML == "") {
//             bishopNextmove.push(bottomright);
//         } else if (bottomright != null && bottomright.innerHTML != "") {
//             cuttingPosBishop.push(bottomright);
//             break;
//         }
//     }
// }

// Bishop Move
const bishopNextmove = [];
let parentBishop = [];
let cuttingPosBishop = [];
function bishop(box) {
            let boxCont = box.innerHTML;
            const boxid = box.id;
            if (bishopNextmove.length > 0 || cuttingPosBishop.length > 0) {
                removalColorPiece(bishopNextmove,cuttingPosBishop);
                pieceMovementCode(box,bishopNextmove,parentBishop,cuttingPosBishop);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackBishop")) {
                    parentBishop.push(document.getElementById(boxid));
                    pieceBishopMove(boxid);
                    nextMoveColoring(bishopNextmove);
                    crossBlackMoveColoring(cuttingPosBishop);
                }
                else if (boxCont.includes(playerturn) && boxCont.includes("WhiteBishop")) {
                    parentBishop.push(document.getElementById(boxid));
                    pieceBishopMove(boxid);
                    nextMoveColoring(bishopNextmove);
                    crossWhiteMoveColoring(cuttingPosBishop);
                }
            }
}

function pieceQueenMove(boxid){
    let upleft, bottomleft, upright, bottomright;
    let upele, bottomele, rightele, leftele;
    // horizontal and vertical position in Queen
    for (let i = 1; i <= 8; i++) {
            // if ((parseInt(boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) {
            // }
            upele = document.getElementById(boxid[0] + (parseInt(boxid[1]) - i));
            if(upele != null){
                if(upele.innerHTML == "") QueenNextmove.push(upele);
                else{
                    if(!upele.innerHTML.includes(playerturn)) {cuttingPosQueen.push(upele); break;}
                    else break;
                }
            }
            else break;
            // if (upele != null && upele.innerHTML == "") {
            //     QueenNextmove.push(upele);
            // }
            // else if (upele != null && upele.innerHTML != "" && !upele.innerHTML.includes(playerturn)) {
            //     cuttingPosQueen.push(upele);
            //     break;
            // }
    }
    for (let i = 1; i <= 8; i++) {
            // if ((parseInt(boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) {
            // }
            bottomele = document.getElementById(boxid[0] + (parseInt(boxid[1]) + i));
            if(bottomele != null){
                if(bottomele.innerHTML == "") QueenNextmove.push(bottomele);
                else{
                    if(!bottomele.innerHTML.includes(playerturn)) {cuttingPosQueen.push(bottomele); break;}
                    else break;
                }
            }
            else break;
    }
    for (let i = 1; i <= 8; i++) {
            let char = String.fromCharCode(boxid.charCodeAt(0) + i);
            rightele = document.getElementById(char + boxid[1]);
            if(rightele != null){
                if(rightele.innerHTML == "") QueenNextmove.push(rightele);
                else{
                    if(!rightele.innerHTML.includes(playerturn)) {cuttingPosQueen.push(rightele); break;}
                    else break;
                }
            }
            else break;
    }
    for (let i = 1; i <= 8; i++) {
            let char = String.fromCharCode(boxid.charCodeAt(0) - i);
            leftele = document.getElementById(char + boxid[1]);
            if(leftele != null){
                if(leftele.innerHTML == "") QueenNextmove.push(leftele);
                else{
                    if(!leftele.innerHTML.includes(playerturn)) {cuttingPosQueen.push(leftele); break;}
                    else break;
                }
            }
            else break;
    }
    //cross position of Queen
    for (let i = 1; i <= 8; i++) {
        let char = String.fromCharCode(boxid.charCodeAt(0) - i);
        upleft = document.getElementById(char + (parseInt(boxid[1]) - i));
        if(upleft != null){
            if(upleft.innerHTML == "") QueenNextmove.push(upleft);
            else{
                if(!upleft.innerHTML.includes(playerturn)) {cuttingPosQueen.push(upleft); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char1 = String.fromCharCode(boxid.charCodeAt(0) - i);
        bottomleft = document.getElementById(char1 + (parseInt(boxid[1]) + i));
        if(bottomleft != null){
            if(bottomleft.innerHTML == "") QueenNextmove.push(bottomleft);
            else{
                if(!bottomleft.innerHTML.includes(playerturn)) {cuttingPosQueen.push(bottomleft); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
        upright = document.getElementById(char2 + (parseInt(boxid[1]) - i));
        if(upright != null){
            if(upright.innerHTML == "") QueenNextmove.push(upright);
            else{
                if(!upright.innerHTML.includes(playerturn)) {cuttingPosQueen.push(upright); break;}
                else break;
            }
        }
        else break;
    }
    for (let i = 1; i <= 8; i++) {
        let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
        bottomright = document.getElementById(char2 + (parseInt(boxid[1]) + i));
        if(bottomright != null){
            if(bottomright.innerHTML == "") QueenNextmove.push(bottomright);
            else{
                if(!bottomright.innerHTML.includes(playerturn)) {cuttingPosQueen.push(bottomright); break;}
                else break;
            }
        }
        else break;
    }
    console.log(QueenNextmove,cuttingPosQueen);

}
// function pieceQueenMove(boxid){
//     let upleft, bottomleft, upright, bottomright;
//     let upele, bottomele, rightele, leftele;
//     // horizontal and vertical position in Queen
//     for (let i = 1; i <= 8; i++) {
//             if ((parseInt(boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) {
//                 upele = document.getElementById(boxid[0] + (parseInt(boxid[1]) - i));
//             }
//             if (upele != null && upele.innerHTML == "") {
//                 QueenNextmove.push(upele);
//             }
//             else if (upele != null && upele.innerHTML != "") {
//                 cuttingPosQueen.push(upele);
//                 break;
//             }
//     }
//     for (let i = 1; i <= 8; i++) {
//             if ((parseInt(boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) {
//                 bottomele = document.getElementById(boxid[0] + (parseInt(boxid[1]) + i));
//             }
//             if (bottomele != null && bottomele.innerHTML == "") {
//                 QueenNextmove.push(bottomele);
//             }
//             else if (bottomele != null && bottomele.innerHTML != "") {
//                 cuttingPosQueen.push(bottomele);
//                 break;
//             }
//     }
//     for (let i = 1; i <= 8; i++) {
//             let char = String.fromCharCode(boxid.charCodeAt(0) + i);
//             if (char >= "a" && char <= "h") {
//                 rightele = document.getElementById(char + boxid[1]);
//             }
//             if (rightele != null && rightele.innerHTML == "") {
//                 QueenNextmove.push(rightele);
//             }
//             else if (rightele != null && rightele.innerHTML != "") {
//                 cuttingPosQueen.push(rightele);
//                 break;
//             }
//     }
//     for (let i = 1; i <= 8; i++) {
//             let char = String.fromCharCode(boxid.charCodeAt(0) - i);
//             if (char >= "a" && char <= "h") {
//                 leftele = document.getElementById(char + boxid[1]);
//             }
//             if (leftele != null && leftele.innerHTML == "") {
//                 QueenNextmove.push(leftele);
//             }
//             else if (leftele != null && leftele.innerHTML != "") {
//                 cuttingPosQueen.push(leftele);
//                 break;
//             }
//     }
//     //cross position of Queen
//     for (let i = 1; i <= 8; i++) {
//         let char = String.fromCharCode(boxid.charCodeAt(0) - i);
//         if ((parseInt((boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) && (char >= "a" && char <= "h")) {
//             upleft = document.getElementById(char + (parseInt(boxid[1]) - i));
//         }
//         if (upleft != null && upleft.innerHTML == "" && !QueenNextmove.includes(upleft)) {
//             // console.log(upleft);
//             QueenNextmove.push(upleft);
//         } else if (upleft != null && upleft.innerHTML != "") {
//             cuttingPosQueen.push(upleft);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char1 = String.fromCharCode(boxid.charCodeAt(0) - i);
//         if ((parseInt((boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) && (char1 >= "a" && char1 <= "h")) {
//             bottomleft = document.getElementById(char1 + (parseInt(boxid[1]) + i));
//         }
//         if (bottomleft != null && bottomleft.innerHTML == "" && !QueenNextmove.includes(bottomleft)) {
//             QueenNextmove.push(bottomleft);
//         } else if (bottomleft != null && bottomleft.innerHTML != "") {
//             cuttingPosQueen.push(bottomleft);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
//         if ((parseInt((boxid[1]) - i) >= 1 && (parseInt(boxid[1]) - i) <= 8) && (char2 >= "a" && char2 <= "h")) {
//             upright = document.getElementById(char2 + (parseInt(boxid[1]) - i));
//         }
//         if (upright != null && upright.innerHTML == "" && !QueenNextmove.includes(upright)) {
//             QueenNextmove.push(upright);
//         } else if (upright != null && upright.innerHTML != "") {
//             cuttingPosQueen.push(upright);
//             break;
//         }
//     }
//     for (let i = 1; i <= 8; i++) {
//         let char2 = String.fromCharCode(boxid.charCodeAt(0) + i);
//         if ((parseInt((boxid[1]) + i) >= 1 && (parseInt(boxid[1]) + i) <= 8) && (char2 >= "a" && char2 <= "h")) {
//             bottomright = document.getElementById(char2 + (parseInt(boxid[1]) + i));
//         }
//         if (bottomright != null && bottomright.innerHTML == "" && !QueenNextmove.includes(bottomright)) {
//             QueenNextmove.push(bottomright);
//         } else if (bottomright != null && bottomright.innerHTML != "") {
//             cuttingPosQueen.push(bottomright);
//             break;
//         }
//     }

// }

// Queen Move       -- in any direction with any step
const QueenNextmove = [];
let parentQueen = [];
let cuttingPosQueen = [];
function queen(box) {
            let boxCont = box.innerHTML;
            const boxid = box.id;
            if (QueenNextmove.length > 0 || cuttingPosQueen.length > 0) {
                removalColorPiece(QueenNextmove,cuttingPosQueen);
                pieceMovementCode(box,QueenNextmove,parentQueen,cuttingPosQueen);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackQueen")) {
                   parentQueen.push(document.getElementById(boxid));
                   pieceQueenMove(boxid);
                   nextMoveColoring(QueenNextmove);
                   crossBlackMoveColoring(cuttingPosQueen);
                }
                else if (boxCont.includes(playerturn) && boxCont.includes("WhiteQueen")) {
                   parentQueen.push(document.getElementById(boxid));
                   pieceQueenMove(boxid);
                   nextMoveColoring(QueenNextmove);
                   crossWhiteMoveColoring(cuttingPosQueen);
                }
            }  
}

function pieceKingMove(boxid){
    let boxuprow = parseInt(boxid[1]-1);
    for(let i = 0; i <= 2; i++){
        let col = String.fromCharCode(boxid.charCodeAt(0) - 1 + i);
        if(col >= "a" && col <= "h"){
            for(let i =0; i <= 2; i++){
                let ele = document.getElementById(col + (boxuprow+i));
                if(ele != null && ele.innerHTML == "")KingNextmove.push(ele);
                if(ele != null  && ele.innerHTML != "" && !ele.innerHTML.includes(playerturn))cuttingPosKing.push(ele);
            } 
        }
    }

}

// King Move           -- only one step move in an direction
const KingNextmove = [];
let parentKing = [];
let cuttingPosKing = [];
function king(box) {
            let boxCont = box.innerHTML;
            const boxid = box.id;
            if (KingNextmove.length > 0 || cuttingPosKing.length > 0) {
                removalColorPiece(KingNextmove,cuttingPosKing);
                pieceMovementCode(box,KingNextmove,parentKing,cuttingPosKing);
            }
            else{
                if (boxCont.includes(playerturn) && boxCont.includes("BlackKing")) {
                parentKing.push(document.getElementById(boxid));
                pieceKingMove(boxid);
                nextMoveColoring(KingNextmove);
                crossBlackMoveColoring(cuttingPosKing);
                }
                else if (boxCont.includes(playerturn) && boxCont.includes("WhiteKing")) {
                parentKing.push(document.getElementById(boxid));
                pieceKingMove(boxid);
                nextMoveColoring(KingNextmove);
                crossWhiteMoveColoring(cuttingPosKing);
                }
            }
}

