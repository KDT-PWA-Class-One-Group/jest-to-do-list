describe("플러그인 테스트", () => {
  class Item {
    constructor(title, checked, create_at, updated_at) {
      this.title = title;
      this.checked = true;
      this.created_at = new Date("1994-11-09");
      this.updated_at = Date.now();
    }
  }

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

  test("아이템 삽입 테스트", () => {
    const database = new CheckedPlugin([]);
    database.listAdd(new Item());

    expect(database.size).toBe(1);
  });

  test("아이템 삭제", () => {
    // given
    const database = new CheckedPlugin([]);
    for (let i = 0; i < 3; i++) {
      const a = new Item();
      database.listAdd(a);
    }
    expect(database.size).toBe(3);

    database.listDelete(Array.from(database.database)[0]);

    // then
    expect(database.size).toBe(2);
  });

  test("비우기 테스트", () => {
    const database = new CheckedPlugin([]);

    const a = new Item();
    database.listAdd(a);

    database.deleteAll();

    expect(database.size).toBe(0);
  });
});
