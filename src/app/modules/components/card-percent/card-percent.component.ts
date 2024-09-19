import { Component, Input, OnInit } from '@angular/core';
import { Stage } from '../../../interfaces/stage.interface';

@Component({
  selector: 'app-card-percent',
  templateUrl: './card-percent.component.html',
  styleUrl: './card-percent.component.scss'
})
export class CardPercentComponent implements OnInit {
  @Input({ required: true }) stages: Stage[] = [];
  sourceStages: Stage[] = [];
  targetStages: Stage[] = [];
  sourceStage!: Stage;
  targetStage!: Stage;
  percent: number = 0;

  ngOnInit() {
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
    return (this.sourceStage.value - this.targetStage.value) / this.sourceStage.value;
  }
}
