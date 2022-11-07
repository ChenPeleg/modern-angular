import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Process} from "../../emulation/process";

@Component({
    selector: "execution-controls",
    templateUrl: "./execution.html"
})
export class ExecutionComponent
{
    // @ts-ignore
  @Input() process: Process = null;

    @Output() start: EventEmitter<Process> = new EventEmitter<Process>();
    @Output() stop: EventEmitter<Process> = new EventEmitter<Process>();
    @Output() continueEvent: EventEmitter<Process> = new EventEmitter<Process>();
    @Output() pause: EventEmitter<Process> = new EventEmitter<Process>();
    @Output() step: EventEmitter<Process> = new EventEmitter<Process>();

  onStart()
    {
        this.start.emit(this.process);
        this.process.start();
    }

  onStop()
    {
        this.stop.emit(this.process);
        this.process.cpu.halt();
    }
    public onContinue()
    {
        this.continueEvent.emit(this.process);
        this.process.cpu.run();
    }

  onPause()
    {
        this.pause.emit(this.process);
        this.process.cpu.pause();
    }

  onStep()
    {
        this.step.emit(this.process);
        this.process.cpu.step();
    }
}
