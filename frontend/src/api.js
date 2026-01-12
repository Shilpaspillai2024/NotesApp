import axios from "axios";

const API_URL="http://localhost:5000/api/notes"

export const getNotes=()=>axios.get(API_URL)

export const addNotes=(data)=>axios.post(API_URL,data)