import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stage } from '../../../interfaces/stage.interface';

@Component({
  selector: 'app-card-percent',
  templateUrl: './card-percent.component.html',
  styleUrl: './card-percent.component.scss'
})
export class CardPercentComponent implements OnInit, OnChanges {
  @Input({ required: true }) stages: Stage[] = [];
  sourceStages: Stage[] = [];
  targetStages: Stage[] = [];
  sourceStage!: Stage;
  targetStage!: Stage;
  percent: number = 0;

  ngOnInit() {
    this.sourceStages = this.stages.slice(0, this.stages.length - 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['stages']) return;
    this.sourceStages = this.stages.slice(0, this.stages.length - 1);
  }

  onSelectChange() {
    if (!this.sourceStage) return;

    const initialTargetStageIndex = this.sourceStages.indexOf(this.sourceStage) + 1;
    this.targetStages = this.stages.slice(initialTargetStageIndex);

    if (!this.targetStage) return;

    this.percent = this.calcConversion();
  }

  private calcConversion(): number {
    if (this.targetStage.value === 0) return 0;
    return this.sourceStage.value / this.targetStage.value;
  }
}
