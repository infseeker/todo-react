import ToDo from './ToDo'

export interface ServerData {
  data: ToDo[];
  message: string;
  code: number;
}