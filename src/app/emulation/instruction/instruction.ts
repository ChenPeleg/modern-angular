import {CPU} from "../cpu";
import {MemoryView} from "../memory-view";
import {Parameter} from "./parameter";

export abstract class Instruction
{
    static get BINARY_WRITE_READ_PARAMS(): string[][] {
        return [
            [Parameter.Reg, Parameter.Reg],
            [Parameter.Reg, Parameter.Constant],
            [Parameter.Reg, Parameter.DerefConstant],
            [Parameter.Reg, Parameter.Memory],
            [Parameter.Memory, Parameter.Reg],
            [Parameter.Memory, Parameter.Constant],
            [Parameter.DerefConstant, Parameter.Reg],
            [Parameter.DerefConstant, Parameter.Constant]
        ];
    }
    static get UNARY_READ_PARAMS(): string[][] {
        return [
            [Parameter.Constant],
            [Parameter.Reg],
            [Parameter.Memory],
            [Parameter.DerefConstant]
        ];
    }
    static get UNARY_WRITE_PARAMS(): string[][] {
        return [
            [Parameter.Reg],
            [Parameter.Memory],
            [Parameter.DerefConstant]
        ];
    }

    get validParameters(): string[][]
    {
        return [
            []
        ];
    }

    abstract execute(cpu: CPU): number;
    loadParameters(...args: any[]): void { }

    toString(): string
    {
        return this.constructor.toString();
    }
}

export abstract class UnaryOperation extends Instruction
{
    // @ts-ignore
  protected target: MemoryView;

  override loadParameters(target: MemoryView)
    {
        this.target = target;
    }
}

export abstract class UnaryReadOperation extends UnaryOperation
{
  override get validParameters(): string[][]
    {
        return Instruction.UNARY_READ_PARAMS;
    }
}
export abstract class UnaryWriteOperation extends UnaryOperation
{
  override get validParameters(): string[][]
    {
        return Instruction.UNARY_WRITE_PARAMS;
    }
}

export abstract class BinaryOperation extends Instruction
{
    // @ts-ignore
  protected target: MemoryView ;
    // @ts-ignore
  protected source: MemoryView  ;

  override get validParameters(): string[][]
    {
        return Instruction.BINARY_WRITE_READ_PARAMS;
    }

  override loadParameters(target: MemoryView, source: MemoryView)
    {
        this.target = target;
        this.source = source;
    }
}
