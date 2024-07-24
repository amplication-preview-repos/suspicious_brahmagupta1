import { Module } from "@nestjs/common";
import { TrainingJobModuleBase } from "./base/trainingJob.module.base";
import { TrainingJobService } from "./trainingJob.service";
import { TrainingJobController } from "./trainingJob.controller";
import { TrainingJobResolver } from "./trainingJob.resolver";

@Module({
  imports: [TrainingJobModuleBase],
  controllers: [TrainingJobController],
  providers: [TrainingJobService, TrainingJobResolver],
  exports: [TrainingJobService],
})
export class TrainingJobModule {}
