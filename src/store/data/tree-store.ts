import { makeAutoObservable } from 'mobx';
import RootStore from '../root-store';

export interface IQuestion {
  question?: string;
  answer?: string;
  id: number;
  options?: IOption[];
  done: boolean;
}

export interface IOption {
  value: string;
  nextId: number;
}

export default class TreeStore {
  root: IQuestion | null = null;
  current: IQuestion | null = null;
  list: { [key: number]: IQuestion } = {};
  tickets: string[] = [];
  done: boolean = false;

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      getById: false,
      add: false,
    });
  }
  // To fill tree with data
  add(question: IQuestion, isRoot?: boolean) {
    if (isRoot) {
      this.root = question;
    }

    this.list[question.id] = question;

    return this;
  }
  // Initiate
  start = () => {
    this.current = this.root;
    this.tickets = [];
  };

  // Reaction: on answer received
  next = (option: IOption) => {
    if (option.nextId) {
      this.current = this.getById(option.nextId);
      if (this.current.done) {
        this.done = true;
      }
      if (this.current.answer) {
        this.tickets.push(this.current.answer);
        let nextId = this.current.options && this.current.options[0].nextId;
        if (nextId) {
          this.current = this.getById(nextId);
        }
      }
    }
  };

  getById(id: number) {
    return this.list[id];
  }
}
