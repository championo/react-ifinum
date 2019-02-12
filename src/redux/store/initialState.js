export const initialState = {
  invoices: [
    {
      id: "5ac1f09ac46e68ee97c8f424",
      direction: "8ad47368-b85b-4b25-a209-9a975fa85ba1",
      number: 11342,
      date_created: "01.01.2019",
      date_due: "10.01.2019",
      date_supply: "01.01.2019",
      comment: "Test simple #1"
    },
    {
      id: "5ac1f09a835436ee9a0bfeb2",
      direction: "bee33a4c-e0cf-4f2c-80b5-93ccab966e46",
      number: 131051,
      date_created: "02.01.2019",
      date_due: "11.01.2019",
      date_supply: "12.01.2019",
      comment: "Test #3"
    },
    {
      id: "5ac1f09af99f30746982959c",
      direction: "0f4fec70-c933-4cc3-900e-f4764113326a",
      number: 131150,
      date_created: "03.01.2019",
      date_due: "12.01.2019",
      date_supply: "13.01.2019",
      comment: "Test simple #4"
    },
    {
      id: "5ac1f09a1248c018d5f62d87",
      direction: "3411c638-1a2f-4a1b-bdbc-6d16833149a9",
      number: 6118,
      date_created: "04.01.2019",
      date_due: "12.01.2019",
      date_supply: "13.01.2019",
      comment: "Test simple #5"
    }
  ],
  filterText: '',
  filterResults: [],
  notify: {
    type: '',
    text: '',
    visible: false
  }
}