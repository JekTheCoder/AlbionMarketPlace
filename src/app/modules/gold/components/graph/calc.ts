import { Point } from "../../interfaces/point";
import { Value } from "../../interfaces/value";

export function toPoints(values: Value[], board: Point, minValue: Value, rangeValue: Value): Point[] {
    const points: Point[] = [{ x: 0, y: board.y }];

    values.forEach(value => {
        const rawPoint: Point = {
            x: board.x*(value.timestamp - minValue.timestamp)/rangeValue.timestamp,
            y: board.y * (1 - ((value.price - minValue.price)/rangeValue.price))
        }

        points.push(rawPoint)
    })

    points.push(board)

    return points
}