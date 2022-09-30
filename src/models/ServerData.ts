import Todo from './Todo'

export default interface ServerData {
  data: Todo[];
  message: string;
  code: number;
}