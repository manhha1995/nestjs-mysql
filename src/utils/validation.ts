import { IsNumberString } from 'class-validator';
 
export class FindOneTask {
  @IsNumberString()
  id: string;
}