export default function clickCell(cell){
  console.log(cell);

  let cellIndex = cell.target.id.substring(5);
  console.log(cellIndex);

  if(cell.target.classList.contains("mine")){
    console.log("Clicked a mine!");
  }

}