// let exampleOnion = {
//   store: {
//     todos: [],
//     username: null
//   },

//   actions: {
//     1: {
//       name: 'addTodo',
//       type: 'add',
//       target: 'todos'
//     },
//     2: {
//       name: 'deleteTodo',
//       type: 'delete',
//       target: 'todos',
//     },
//     3: {
//       name: 'setTodo',
//       type: 'setIn'
//     },
//     4: {
//       name: 'setUsername',
//       type: 'set'
//     }
//   },

//   components: {
//     1: {
//       name: 'componentName',
//       children: [2, 3, 4]
//     },

//     2: {
//       name: 'exampleChild',
//       children: []
//     },

//     3: {
//       name: 'exampleChild2',
//       children: [5]
//     },

//     4: {
//       name: 'exampleChildList',
//       children: []
//     },

//     5: {
//       name: 'exampleChildOfChild',
//       children: []
//     }
//   },
// }

// /*files

// actions.js*/

// const CREATE_TODO = 'CREATE_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const SET_TODO = 'SET_TODO';
// const SET_USERNAME = 'SET_USERNAME';

// export const types = {
//   CREATE_TODO,
//   DELETE_TODO,
//   SET_TODO,
//   SET_USERNAME,
// }

// const addTodo = (item) => ({
//   type: CREATE_TODO,
//   item
// });

// const deleteTodo = (index) => {
//   type: DELETE_TODO,
//   index
// }

// const setTodo = (index, item) => {
//   type: SET_TODO,
//   index,
//   item
// }

// const setUsername = (value) => {
//   type: SET_USERNAME,
//   value
// }


