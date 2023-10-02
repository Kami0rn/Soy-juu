// primitives
type NameType = string;

// union types
type NumberOrString = number | string;

// tuples
type NumberStringPair = [number, string];




interface Point {
    x: number;
};

interface Point {
    y: number;
};

let point: Point = {
    x: 1,
    y: 2
};