import TreeStore from './data/tree-store';

export default class RootStore {
  treeStore: TreeStore;

  constructor() {
    this.treeStore = new TreeStore(this);
  }
}
