import { useRef } from "react";
import styled from "styled-components/macro";
import emailjs from "emailjs-com";

const Container = styled.div`
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  width: 40%;
  background-color: #000d1a;
  border-radius: 5px;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const TextArea = styled.textarea`
  flex: 1;
  min-width: 40%;
  height: 200px;
  margin: 10px 0;
  padding: 15px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #cc570b;
  color: white;
  cursor: pointer;
  margin: 20px 0 10px;
  border-radius: 5px;

  &:hover {
    background-color: #cc870f;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendForm = () => {
    return <div>Hello World</div>;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfsyhch",
        "template_16kbpeg",
        form.current,
        "user_QUeizM3UV4QJDrcHCRpUv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" placeholder="Name" name="user_name" required />
          <Input type="Email" placeholder="E-mail" name="user_email" required />
          <TextArea name="message" />
          <Button type="submit" onClick={sendForm}>
            Send
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
