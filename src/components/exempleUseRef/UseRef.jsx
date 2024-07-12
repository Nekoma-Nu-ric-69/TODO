import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const UseRef = () => {
  const [deleteItem, setDeleteItem] = useState(null);
  const [todo, setTodo] = useState([]);
  console.log("todo: ", todo);

  const inputRef = useRef();
  useEffect(() => {
    fetch(
      "https://todo-c9d34-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const property in data) {
          setTodo((prev) => [...prev, data[property]]);
        }
      });
  }, []);

  // const handleDelete = () => {
  //   const removeItem = todo.filter((todos) => {
  //     return todos.id == deleteItem;
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      alert("Enter please!!");
      return;
    }

    // const handleStop = (e) => {
    //   e.preventDefault();
    // };
    const newValue = {
      title: inputRef.current.value,
      id: Date.now(),
    };

    try {
      await fetch(
        "https://todo-c9d34-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newValue),
        }
      );
      console.log("render");
    } catch (error) {}

    inputRef.current.value = "";
  };
  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="user name"
          name="usePassword"
          ref={inputRef}
        />
        <StyledButton>send</StyledButton>
      </ContainerForm>
      <StyleList>
        {/* {todo.for (const key in object) {
          if (Object.hasOwnProperty.call(object, key)) {
           <StyledLi key={item.id}>
             <p>{item.title}</p>
            console.log({item})
          </StyledLi>
          }.
        }
        } */}
        {todo.map((item) => (
          <StyledLi key={item.id}>
            <p>{item.title}</p>
          </StyledLi>
        ))}
      </StyleList>
    </>
  );
};
const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #f0efed;
`;
const StyledInput = styled.input`
  height: 40px;
  border-radius: 10px;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
`;
const StyleList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    list-style: none;
  }
`;
const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;
