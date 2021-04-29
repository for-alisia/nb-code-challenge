import RootStore from '../root-store';

const createStore = () => {
  let store = new RootStore();
  // Fill with data
  store.treeStore
    .add(
      {
        question: 'Are you planning a single trip?',
        id: 1,
        options: [
          { value: 'Yes, just 1 trip', nextId: 2 },
          { value: 'No, I need more', nextId: 3 },
        ],
        done: false,
      },
      true
    )
    .add({
      question: 'How long are you planning to stay in Berlin?',
      id: 3,
      options: [
        { value: 'Less then a week', nextId: 6 },
        { value: 'From 7 days up to 30 days', nextId: 7 },
        { value: 'More then 30 days', nextId: 8 },
      ],
      done: false,
    })
    .add({
      question: 'Are you planning to have a lot of trips every day?',
      id: 6,
      done: false,
      options: [
        { value: 'Yes, of course', nextId: 9 },
        { value: 'No, just couple or less', nextId: 13 },
      ],
    })
    .add({
      question: 'Are you goal is to visit a lot of sights?',
      id: 14,
      done: false,
      options: [
        { value: "Yes, I'm a tourist", nextId: 15 },
        { value: "No, it's not a goal", nextId: 10 },
      ],
    })
    .add({
      question: 'Are you a student?',
      id: 8,
      options: [
        { value: "No, I'm not", nextId: 16 },
        { value: 'Yes, I am', nextId: 17 },
      ],
      done: false,
    })
    .add({
      question: 'Are you planning travel to the suburbs?',
      id: 20,
      done: false,
      options: [
        { value: 'No, only Berlin', nextId: 10 },
        { value: 'Yes, suburbs are great!', nextId: 21 },
      ],
    })
    .add({
      answer: '24-hour ticket allows you to have as many trips as you want',
      id: 9,
      done: false,
      options: [{ value: '', nextId: 14 }],
    })
    .add({
      answer: '4-trip ticket - just use it when you need!',
      id: 13,
      done: false,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      answer: 'Tourist ticket - special offer for guests of the city',
      id: 15,
      done: false,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      answer: 'Congratulations! Student monthly ticket is the best choice for you',
      id: 17,
      done: false,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      answer: 'Monthly ticket is the best option to save your money',
      id: 16,
      done: false,
      options: [{ value: '', nextId: 20 }],
    })
    .add({
      question: 'Is your trip short?',
      id: 2,
      options: [
        { value: 'Yes', nextId: 4 },
        { value: 'No', nextId: 5 },
      ],
      done: false,
    })
    .add({
      answer: 'Short trip ticket is your choice',
      done: false,
      id: 4,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      answer: 'Single fare ticket is your choice',
      done: false,
      id: 5,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      answer: '7-day ticket allows you to have as many trips as you need',
      done: false,
      id: 7,
      options: [{ value: '', nextId: 20 }],
    })
    .add({
      answer: 'You need Berlin-Ticket S to get to the suburbs',
      done: false,
      id: 21,
      options: [{ value: '', nextId: 10 }],
    })
    .add({
      question: 'Do you need to take a bicycle?',
      done: false,
      id: 10,
      options: [
        { value: 'Yes, of course', nextId: 11 },
        { value: "No, I don't need it", nextId: 12 },
      ],
    })
    .add({ answer: "Don't forget to buy a Bicycle ticket", done: true, id: 11 })
    .add({ answer: '', done: true, id: 12 })
    .start();
  return store;
};

export { createStore };
