import { Module } from '@nestjs/common';

@Module({
  providers: [WorkflowsService],
  exports: [WorkflowsService],
})
export class WorkflowsModule {}
