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

    listDeleteById = (id) => {
      for (const e of this.database) {
        if (e.id === id) {
          this.database.delete(e);
          break;
        }
      }
    };

    deleteAll = () => {
      this.database.clear();
    };

    toSaveCurrentData = () => {
      return Array.from(this.database);
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

    database.listDeleteById(Array.from(database.database)[0].id);

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

  test("데이터 추출", () => {
    const database = new CheckedPlugin([]);

    for (let i = 0; i < 3; i++) {
      const dummy = new Item();
      database.listAdd(dummy);
    }

    const data = database.toSaveCurrentData();

    expect(data.length).toBe(3);
  });
});
