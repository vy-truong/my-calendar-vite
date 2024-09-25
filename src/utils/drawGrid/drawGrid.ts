import { Day } from "@/types/global";
import { canvasWrapperId } from "@/constants";
import { Theme } from "@/styles";
import { drawMonthlyView } from "./drawMonthlyView";

//THIS PAGE MANIPULATE THE GRID ( row and column)
export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  rows: number,
  cols: number,
  parsedStartDate: Day,
  theme: Theme
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const canvasWrapper = document.getElementById(canvasWrapperId);
  if (!canvasWrapper) return;

  switch (zoom) {
    //case 0 makes sure each emp has one row, each emp is assigned only 1 shift a day 
    case 0:
      drawMonthlyView(ctx, rows, cols, parsedStartDate, theme);
      break;
  }
};
