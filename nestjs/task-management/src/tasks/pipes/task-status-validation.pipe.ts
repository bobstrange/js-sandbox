import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class  TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses =  [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ]
  transform(value: any) {
    const formattedValue = value.toUpperCase()
    if (!this.isStatusValid(formattedValue)) {
      throw new BadRequestException(`"${value}" is an invalid status`)
    }
    return value
  }

  private isStatusValid(status: any): boolean {
    const index = this.allowedStatuses.indexOf(status)
    return index !== -1
  }
}
