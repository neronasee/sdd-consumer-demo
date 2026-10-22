/**
 * Tiny calculator fixture — the workpiece for plugin smoke runs.
 * Deliberately small: cheap for agents to read and reason about.
 */
export type BinaryOp = "add" | "subtract" | "multiply" | "divide";

export function calculate(op: BinaryOp, a: number, b: number): number {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new RangeError("divide by zero");
      return a / b;
  }
}
