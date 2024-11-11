class CheckedPlugin {
  constructor(database) {
    this.database = new Set(database);
  }

  listAdd = (data) => {
    this.database.add(data);
  };

  listDelete = (data) => {
    if (this.database.has(data)) {
      this.database.delete(data);
    }
  };

  deleteAll = () => {
    this.database.clear();
  };

  get size() {
    return this.database.size;
  }
}
