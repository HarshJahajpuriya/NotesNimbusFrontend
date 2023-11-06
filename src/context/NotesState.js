import React from "react"

export let notes = [{
  _id: "65410741ccb1ec6da176d378",
  user: "6540bfe6e792170802dcf86e",
  title: "My title",
  description: "My Desccription",
  tag: "Test",
  date: "2023-10-31T13:55:13.347Z",
},
{
  _id: "654107dfccb1ec6da176d380",
  user: "6540bfc0225fd89b12a4a850",
  title: "Study",
  description: "Complete React Tutorial from CodeWithHarry",
  tag: "Career",
  date: "2023-10-31T13:57:51.142Z"
},
{
  _id: "65421deb7c845ca984a1fe24",
  user: "6540bfc0225fd89b12a4a850",
  title: "Study",
  description: "Complete React Tutorial",
  tag: "Career",
  date: "2023-11-01T09:44:11.186Z",
}]

export const addNote = ({title, description, tag}) => {
  notes.push({
    _id: "65421deb7c845ca984aqfe24",
    user: "6540bfc0225fd89b12a41a850",
    title,
    description,
    tag,
    date: "2023-11-01T09:44:11.186Z",
  })
}