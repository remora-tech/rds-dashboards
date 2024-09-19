import { Component, Input } from '@angular/core';
import { Stage } from '../../../interfaces/stage.interface';

@Component({
  selector: 'app-card-percent',
  templateUrl: './card-percent.component.html',
  styleUrl: './card-percent.component.scss'
})
export class CardPercentComponent {
  @Input() sourceStages: Stage[] = [
    { name: 'Lead Marketing', value: 100 },
    { name: 'Conectado', value: 60 },
    { name: 'Pagamento', value: 40 },
    { name: 'Venda Realizada', value: 20 },
  ];
  targetStages: Stage[] = [];
  sourceStage!: Stage;
  targetStage!: Stage;
  percent: number = 0;

  onSelectChange() {
    if (!this.sourceStage) return;

    const initialTargetStageIndex = this.sourceStages.indexOf(this.sourceStage) + 1;
    this.targetStages = this.sourceStages.slice(initialTargetStageIndex);

    if (!this.targetStage) return;

    this.percent = this.calcConversion();
  }

  private calcConversion(): number {
    return (this.sourceStage.value - this.targetStage.value) / this.sourceStage.value;
  }
}
