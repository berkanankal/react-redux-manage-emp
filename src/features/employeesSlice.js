import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    name: "Thomas Hardy",
    email: "thomashardy@mail.com",
    address: "89 Chiaroscuro Rd, Portland, USA",
    phone: "171 555-2222",
  },
  {
    id: uuidv4(),
    name: "Dominique Perrier",
    email: "dominiqueperrier@mail.com",
    address: "Obere Str. 57, Berlin, Germany",
    phone: "313 555-5735",
  },
  {
    id: uuidv4(),
    name: "Maria Anders",
    email: "mariaanders@mail.com",
    address: "25, rue Lauriston, Paris, France",
    phone: "503 555-9931",
  },
  {
    id: uuidv4(),
    name: "Fran Wilson",
    email: "franwilson@mail.com",
    address: "C/ Araquil, 67, Madrid, Spain",
    phone: "204 619-5731",
  },
  {
    id: uuidv4(),
    name: "Martin Blank",
    email: "martinblank@mail.com",
    address: "Via Monte Bianco 34, Turin, Italy",
    phone: "480 631-2097",
  },
  {
    id: uuidv4(),
    name: "Sophie Myles",
    email: "sophiemyles@mail.com",
    address: "18 Mills St, Norwalk, CT 16 Ann St, Norwalk",
    phone: "203 299-1229",
  },
  {
    id: uuidv4(),
    name: "James Caviezel",
    email: "jamescaviezel@mail.com",
    address: "Via Pomona Ave, Kansas, Italy",
    phone: "573 587-5215",
  },
  {
    id: uuidv4(),
    name: "Ron Perlman",
    email: "ronperlman@mail.com",
    address: "Danis, Panaro & Nist W. Olympic, USA",
    phone: "301 935-2221",
  },
  {
    id: uuidv4(),
    name: "Fran Wilson",
    email: "franwilson@mail.com",
    address: "C/ Araquil, 67, Madrid, Spain",
    phone: "204 619-5731",
  },
  {
    id: uuidv4(),
    name: "Petra Prazak",
    email: "petraprazak@mail.com",
    address: "2653 Level Loop Rd, Virginia Beach, VA",
    phone: "682 631-2037",
  },
  {
    id: uuidv4(),
    name: "Fran Wilson",
    email: "franwilson@mail.com",
    address: "C/ Araquil, 67, Madrid, Spain",
    phone: "204 619-5731",
  },
  {
    id: uuidv4(),
    name: "Thomas Hardy",
    email: "thomashardy@mail.com",
    address: "89 Chiaroscuro Rd, Portland, USA",
    phone: "171 555-2222",
  },
  {
    id: uuidv4(),
    name: "Martin Blank",
    email: "martinblank@mail.com",
    address: "Via Monte Bianco 34, Turin, Italy",
    phone: "480 631-2097",
  },
  {
    id: uuidv4(),
    name: "Fran Wilson",
    email: "franwilson@mail.com",
    address: "C/ Araquil, 67, Madrid, Spain",
    phone: "204 619-5731",
  },
  {
    id: uuidv4(),
    name: "Ron Perlman",
    email: "ronperlman@mail.com",
    address: "Danis, Panaro & Nist W. Olympic, USA",
    phone: "301 935-2221",
  },
];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => [...state, action.payload],
    deleteEmployee: (state, action) =>
      state.filter((e) => e.id !== action.payload),
    updateEmployee: (state, action) =>
      state.map((e) => (e.id === action.payload.id ? action.payload : e)),
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
