class TodoList {
  constructor() {
    this.data = [
      {
        id: "1",
        title: "Some Dummy title:1",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        created_at: Date.now(),
        edited_at: Date.now(),
        checked: false,
        deleted: false
      },
      {
        id: "2",
        title: "Some Dummy title:2",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        created_at: Date.now(),
        edited_at: Date.now(),
        checked: false,
        deleted: false
      },
      {
        id: "3",
        title: "Some Dummy title:3",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        created_at: Date.now(),
        edited_at: Date.now(),
        checked: false,
        deleted: false
      },
      {
        id: "4",
        title: "Some Dummy title:4",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        created_at: Date.now(),
        edited_at: Date.now(),
        checked: true,
        deleted: false
      }
    ];
  }

  getunCheckedData() {
    let temp = this.data.reduce((tempData, object) => {
      if (object.deleted === false && object.checked === false) {
        tempData.push(object);
      }
      return tempData;
    }, []);

    return temp;
  }

  getCheckedData() {
    let temp = this.data.reduce((tempData, object) => {
      if (object.deleted === false && object.checked === true) {
        tempData.push(object);
      }
      return tempData;
    }, []);

    return temp;
  }

  getData() {
    let data = [];

    let checkedData = this.getCheckedData();
    let uncheckedData = this.getunCheckedData();
    data = uncheckedData.concat(checkedData);
    return data;
  }

  deleteData(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data[i].deleted = true;
      }
    }
  }

  completeTask(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        let status = this.data[i].checked;
        this.data[i].checked = !status;
      }
    }
  }
}

export default TodoList;
