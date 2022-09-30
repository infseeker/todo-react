import Todo from './Todo'

export default interface ServerData {
  data: Todo[] | Todo;
  message: string;
  code: number;
}